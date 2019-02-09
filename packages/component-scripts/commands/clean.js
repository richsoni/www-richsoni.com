const chalk = require('chalk');
const fs = require('fs-extra');

module.exports = commandArgs => {
  const { resolveApp } = commandArgs;
  const dir = resolveApp('./build');
  console.log(chalk.red(`removing:`), dir);
  fs.ensureDirSync(dir);
  fs.removeSync(resolveApp(dir));
};
