// This is a combination of snippets from
// https://rollupjs.org/guide/en#rollup-rollup
// https://www.npmjs.com/package/rollup-plugin-typescript2
// https://www.npmjs.com/package/rollup-plugin-postcss-modules

const rollup = require('rollup');
const postcss = require('rollup-plugin-postcss-modules').default;
const typescript = require('rollup-plugin-typescript2');

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
      postcss({
        extract: true,  // extracts to `${basename(dest)}.css`
        plugins: [autoprefixer()],
        writeDefinitions: true,
        modules: true,
        modules: { }
      }),
      typescript({
        tsconfig: resolveOwn('tsconfig.json'),
        tsconfigOverride: {
          include: [
            `${resolveApp('src')}/**/*.ts*`
          ]
        }
      })
    ],
  };

  const outputOptions = {
    file: resolveApp('build/index.js'),
    format: 'iife',
    name: startCase(pkg.name.replace("@richsoni/","")).split(' ').join('')
  };
  glob.sync(resolveApp('src/**/*.css')).forEach((css) => {  // Use forEach because https://github.com/rollup/rollup/issues/1873
    const definition = `${css}.d.ts`
    if (!fs.existsSync(definition))
      fs.writeFileSync(definition, 'const mod: { [cls: string]: string }\nexport default mod\n')
  })

  rollup
    .rollup(inputOptions)
    .then((bundle) => {
      bundle.write(outputOptions);
    })
};
