#!/usr/bin/env node
const { spawnSync} = require('child_process');

const path = require('path');

const chalk = require('chalk');
const commander = require('commander');
const fs = require('fs-extra');

const resolve = relativePath => path.resolve(__dirname, '..', relativePath);

const utilPkg = require(resolve('../package.json'));

const cloneTemplate = require(resolve('../.templates/clone-template'));
const template = require(resolve('../.templates/component-package/generator.js'));

let directory;

const program = new commander.Command('component-package')
  .version(utilPkg.version)
  .arguments('<directory>')
  .usage(`${chalk.green('<directory>')} [options]`)
  .action(name => {
    directory = name;
  })
  .option('--verbose', 'print additional logs')
  .on('--help', () => {
    console.log('');
    console.log(`  Only ${chalk.green('<directory>')} is required.`);
    console.log('');
  })
  .parse(process.argv);

if (typeof directory === 'undefined') {
  program.help();
}

const commandArgs = {
  directory,
  template,
};

cloneTemplate(commandArgs);
spawnSync('lerna', ['bootstrap'], {stdio: 'inherit'})
spawnSync('lerna', ['link'], {stdio: 'inherit'})
console.log()
console.log(chalk.green("DONE!!!"))
console.log()
console.log('$ cat', directory+'/readme.md')
spawnSync('cat', [directory+'/readme.md'], {stdio: 'inherit'})
spawnSync('lerna', ['run', 'npm', 'run', 'build'], {stdio: 'inherit'})
