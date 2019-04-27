#!/usr/bin/env node

const path = require('path');

const commander = require('commander');
const fs = require('fs-extra');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const resolveOwn = relativePath => path.resolve(__dirname, '..', relativePath);

const utilPkg = require(resolveOwn('package.json'));
const build = require(resolveOwn('commands/build'));

new commander.Command(`${utilPkg.name}-start`)
  .version(utilPkg.version)
  .option('--verbose', 'print additional logs')
  .parse(process.argv);

const commandArgs = {
  resolveApp,
  resolveOwn,
  watch: true,
};

build(commandArgs);
