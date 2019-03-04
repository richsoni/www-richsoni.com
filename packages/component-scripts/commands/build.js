const rollup = require('rollup');
const typescript = require('rollup-plugin-typescript2');
const commonjs = require('rollup-plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');
const resolve = require('rollup-plugin-node-resolve');
const url = require('rollup-plugin-url');
// const svgr = require('@svgr/rollup');

const fs = require('fs-extra')
const glob = require('glob')
const autoprefixer = require('autoprefixer')
const {startCase} = require('lodash')

module.exports = ({resolveOwn, resolveApp}) => {
  const pkg = fs.readJSONSync(resolveApp('package.json'));
  // see https://rollupjs.org/guide/en#rollup-rollup
  // for options
  const inputOptions = {
    input: resolveApp('src/index.tsx'),
    plugins: [
      external(),
      postcss({ modules: true }),
      url(),
      // svgr(),
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        tsconfig: resolveOwn('tsconfig.json'),
        tsconfigOverride: {
          include: [
            `${resolveApp('src')}/**/*.ts*`
          ]
        }
      }),
      commonjs()
      // postcss({
      //   extract: true,  // extracts to `${basename(dest)}.css`
      //   plugins: [autoprefixer()],
      //   writeDefinitions: true,
      //   modules: true,
      //   modules: { }
      // }),
    ],
  };

  const outputOptions = [{
    file: pkg.main,
    format: 'cjs',
    exports: 'named',
    sourcemap: true
  }, {
    file: pkg.module,
    format: 'es',
    exports: 'named',
    sourcemap: true
  }]
  glob.sync(resolveApp('src/**/*.css')).forEach((css) => {  // Use forEach because https://github.com/rollup/rollup/issues/1873
    const definition = `${css}.d.ts`
    if (!fs.existsSync(definition))
      fs.writeFileSync(definition, 'const mod: { [cls: string]: string }\nexport default mod\n')
  })

  rollup
    .rollup(inputOptions)
    .then((bundle) => {
      outputOptions.map((outputOption) => {
        bundle.write(outputOption);
      })
    })
};
