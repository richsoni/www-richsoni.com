#!/usr/bin/env node

const path = require('path');

const commander = require('commander');
const fs = require('fs-extra');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const paths = {
  packageJSON: resolveApp('package.json'),
  lernaJSON: resolveApp('lerna.json')
}
const packageJSON = require(paths.packageJSON)
const lernaJSON = require(paths.lernaJSON)

const program = new commander.Command('lerna-toggle-package-manager')
  .usage('[args] <npm|yarn>')
  .parse(process.argv);

const toYarn = function(){
}

if(program.args.length != 1) {
  program.outputHelp()
  return;
}

const engine = program.args[0];
if(engine === 'npm') {
  packageJSON.private = true;
  delete packageJSON.workspaces;

  lernaJSON.npmClient = "npm";
  delete lernaJSON.useWorkspaces;
  lernaJSON.command = lernaJSON.command || {};
  lernaJSON.command.bootstrap = {
    npmClientArgs: ['--no-package-lock'],
    hoist: true,
    ignoreScripts: true
  };
  fs.unlink(resolveApp('yarn.lock'))
} else if(engine === 'yarn') {
  packageJSON.private = true;
  packageJSON.workspaces = "packages/*"

  lernaJSON.npmClient = "yarn";
  lernaJSON.useWorkspaces = true;
  delete lernaJSON.command.bootstrap;
  fs.unlink(resolveApp('package-lock.json'))
} else {
  program.outputHelp()
  return;
}
fs.writeFileSync(paths.packageJSON, JSON.stringify(packageJSON, null, 2));
fs.writeFileSync(paths.lernaJSON, JSON.stringify(lernaJSON, null, 2));
console.log("Wrote package.json")
console.log("Wrote lerna.json")
