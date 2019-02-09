const {kebabCase} = require('lodash')
const componentScriptsPkg = require('./packages/component-scripts/package.json')

const appPath = 'packages/{{componentName}}/'
const templatePath = '.templates/component-package/'

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
    actions: [
      {
        type: 'add',
        path: appPath+'package.json',
        templateFile: templatePath+'package.json.hbs',
        data: {
          componentScriptsVersion: componentScriptsPkg.version
        }
      },

      {
        type: 'add',
        path: appPath+'readme.md',
        templateFile: templatePath+'readme.md.hbs'
      },

      {
        type: 'add',
        path: appPath+'src/index.tsx',
        templateFile: templatePath+'src/index.tsx.hbs'
      },

      {
        type: 'add',
        path: appPath+'src/index.stories.tsx',
        templateFile: templatePath+'src/index.stories.tsx.hbs'
      },

      {
        type: 'add',
        path: appPath+'src/index.module.css',
        templateFile: templatePath+'src/index.module.css.hbs'
      },
    ]
  });
};
