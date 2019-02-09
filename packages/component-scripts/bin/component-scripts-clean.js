#!/usr/bin/env node

const path = require('path');

const commander = require('commander');
const fs = require('fs-extra');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const resolveOwn = relativePath => path.resolve(__dirname, '..', relativePath);

const utilPkg = require(resolveOwn('package.json'));
const clean = require(resolveOwn('commands/clean'));

new commander.Command(`${utilPkg.name}-build`)
  .version(utilPkg.version)
  .option('--verbose', 'print additional logs')
  .parse(process.argv);

const commandArgs = {
  resolveApp,
  resolveOwn,
};

clean(commandArgs);
