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
const chalk = require('chalk');

module.exports = ({resolveOwn, resolveApp, watch}) => {
  console.log(chalk.green('building'));
  const pkg = fs.readJSONSync(resolveApp('package.json'));
  // see https://rollupjs.org/guide/en#rollup-rollup
  // for options
  const inputOptions = {
    input: resolveApp('src/index.tsx'),
    plugins: [
      external(),
      url(),
      // svgr(),
      postcss({
        modules: true,
      }),
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
    ],
  };

  const outputOptions = [
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
  ]
  if(!watch){
    rollup
      .rollup(inputOptions)
      .then((bundle) => {
        outputOptions.map((outputOption) => {
          bundle.write(outputOption);
          console.log(chalk.green('built1'));
        })
      })
  } else {
    const watchOptions = {
      ...inputOptions,
      output: outputOptions,
      watch: {
        chokidar: {
          atomic: true
        },
        // exclude,
        // include
      }
    };
    const watcher = rollup.watch(watchOptions);
    watcher.on('event', event => {
      // event.code can be one of:
      //   START        — the watcher is (re)starting
      //   BUNDLE_START — building an individual bundle
      //   BUNDLE_END   — finished building a bundle
      //   END          — finished building all bundles
      //   ERROR        — encountered an error while bundling
      //   FATAL        — encountered an unrecoverable error
      if(event.code === 'BUNDLE_END'){
        console.log(chalk.green('built2'));
        // glob.sync(resolveApp('src/**/*.css')).forEach((css) => {  // Use forEach because https://github.com/rollup/rollup/issues/1873
        //   const definition = `${css}.d.ts`
        //   if (!fs.existsSync(definition))
        //     fs.writeFileSync(definition, 'const mod: { [cls: string]: string }\nexport default mod\n')
        // })
      }
    });
  }
};
