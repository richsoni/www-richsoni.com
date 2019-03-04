#!/usr/bin/env node

const path = require('path');

const commander = require('commander');
const chalk = require('chalk');

const resolveOwn = relativePath => path.resolve(__dirname, '..', relativePath);
const utilPkg = require(resolveOwn('package.json'));

new commander.Command(utilPkg.name)
  .version(utilPkg.version)
  .arguments('<command>')
  .usage(`${chalk.green('<command>')} [options]`)
  .option('--verbose', 'print additional logs')
  .on('--help', () => {
    console.log('');
    console.log(`  Only ${chalk.green('<command>')} is required.`);
    console.log('');
  })
  .command('build', 'build the project ~(src/app.js -> dist/app.js)')
  .command('clean', 'clean the project ~(rm -rf dist)')
  .command('start', 'start the project')
  .parse(process.argv);
