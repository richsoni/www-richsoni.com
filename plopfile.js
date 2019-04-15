const {kebabCase} = require('lodash')
const strftime = require('strftime')
const {execSync} = require('child_process');
const fs = require('fs')

module.exports = function (plop) {
  const date = strftime('%F', new Date())

  plop.setGenerator('blog-post', {
    description: 'A Blog Post',
    prompts: [{
      type: 'input',
      name: 'postName',
      message: 'postName - use kebabCase \n( see: https://www.npmjs.com/package/lodash.kebabcase )\n>',
      validate: (input) => {
        return input !== '' && input === kebabCase(input)
      }
    },
    {
      type: 'input',
      name: 'categories',
      message: 'categories - use kebabCase (separate by ,) \n( see: https://www.npmjs.com/package/lodash.kebabcase )\n>',
    },
    {
      type: 'input',
      name: 'tags',
      message: 'tags - use kebabCase (separate by ,) \n( see: https://www.npmjs.com/package/lodash.kebabcase )\n>',
    },
    {
      type: 'input',
      name: 'title',
      message: 'title - use any case',
    },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/gatsby-site/src/posts/'+date+'-{{postName}}.md',
        templateFile: 'packages/components-scripts/templates/post.md.hbs',
        data: {
          date: date
        }
      },
    ]
  });

  plop.setGenerator('event', {
    description: 'Create an event',
    prompts: [{
      type: 'rawlist',
      name: 'venue',
      message: 'choose a venue',
      choices: fs.readdirSync('./packages/gatsby-site/src/data/locations/').map((x) => x.replace('.yaml',''))
    },{
      type: 'text',
      name: 'eventDate',
      message: 'eventDate - use the following format YYYY-MM-DD',
    },],
    actions: [
      {
        type: 'add',
        path: 'packages/events/data/{{eventDate}}-{{venue}}.md',
        templateFile: 'templates/event.md.hbs',
      },
    ]
  });

  const componentScriptsArgs = {
    pkg: require('./packages/component-scripts/package.json'),
    appPath: 'packages/components-{{componentName}}/',
    templatePath: 'packages/component-scripts/templates/component-package/',
  }

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
        path: componentScriptsArgs.appPath+'package.json',
        templateFile: componentScriptsArgs.templatePath+'package.json.hbs',
        data: {
          componentScriptsVersion: componentScriptsArgs.pkg.version
        }
      },

      {
        type: 'add',
        path: componentScriptsArgs.appPath+'readme.md',
        templateFile: componentScriptsArgs.templatePath+'readme.md.hbs'
      },

      {
        type: 'add',
        path: componentScriptsArgs.appPath+'src/index.tsx',
        templateFile: componentScriptsArgs.templatePath+'src/index.tsx.hbs'
      },

      {
        type: 'add',
        path: componentScriptsArgs.appPath+'src/index.module.css',
        templateFile: componentScriptsArgs.templatePath+'src/index.module.css.hbs'
      },

      {
        type: 'add',
        path: componentScriptsArgs.appPath+'src/css-modules.d.ts',
        templateFile: componentScriptsArgs.templatePath+'src/css-modules.d.ts'
      },

      (data) => {
        try {
          execSync('lerna bootstrap', {stdio: 'inherit'})
        } catch(err) {
          execSync(`rm -rf packages/${data.componentName}`)
          return 'error rollback!'
        }
        return 'done'
      }
    ]
  });
};
