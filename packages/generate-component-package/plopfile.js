const {kebabCase} = require('lodash')
const componentScriptsPkg = require('./packages/component-scripts/package.json')

module.exports = function (plop) {
  plop.setGenerator('package-component', {
    description: 'A Package Level Component',
    prompts: [{
      type: 'input',
      name: 'componentName',
      message: 'componentName - use kebabCase \n( see: https://www.npmjs.com/package/lodash.kebabcase )\n>',
      validate: (input) => {
        return input !== '' && input === kebabCase(input)
      }
    }],
    actions: funtion(data) {
      const actions = []
      actions.push({
        type: 'add',
        path: 'packages/{{componentName}}/package.json',
        templateFile: 'template/package.json.hbs'
        data: {
          componentScriptsVersion: 
        }
      })
      return actions;
    }
  });
};
