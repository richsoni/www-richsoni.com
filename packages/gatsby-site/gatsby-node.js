const path = require('path');
const buildExtraMarkdownFields = require('./lib/markdownFields');
const existsSync = require(`fs-exists-sync`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if(node.internal.type === 'MarkdownRemark' || node.internal.type ==='LocationsYaml'){
    extraFields = buildExtraMarkdownFields({ node, getNode})
    Object.keys(extraFields).map((k) => {
      const value = extraFields[k];
      createNodeField({
        node,
        name: k,
        value: value,
      });
    })
  }
};

exports.createPages = ({ graphql, actions }) => {
  const {createPage, createRedirect } = actions;
  createRedirect({
    fromPath: '/blog/',
    toPath: '/posts', isPermanent: true, redirectInBrowser: true
  });
  createRedirect({
    fromPath: '/blog',
    toPath: '/posts', isPermanent: true, redirectInBrowser: true
  });
  createRedirect({
    fromPath: '/shows/',
    toPath: '/events', isPermanent: true, redirectInBrowser: true
  });
  createRedirect({
    fromPath: '/shows',
    toPath: '/events', isPermanent: true, redirectInBrowser: true
  });
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                url
                relativeDirectory
                basename
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const type = node.fields.relativeDirectory;
        const url = node.fields.url;
        let template = path.resolve(`./src/templates/${type}.js`);
        if(!existsSync(template)) { 
          template = path.resolve(`./src/templates/${type}.tsx`);
        }
        if(existsSync(template))
        {
          //Create Basic Blog Pages
          createPage({
            path: url,
            component: template,
            context: {
              url
            }
          });
          createRedirect({
            fromPath: url.replace(/\/$/, '')+'.html',
            toPath: url, isPermanent: true,
            redirectInBrowser: true,
          });
          createRedirect({
            fromPath: url.replace(/\/$/, ''),
            toPath: url, isPermanent: true,
            redirectInBrowser: true
          });
          // Redirects
          [{from: 'blog', to: 'posts'}, {from: 'shows', to: 'events'}].map((item) =>{
            const regexp = new RegExp(`\/${item.to}`);
            if(url.match(regexp)){
              const redirect = url.replace(regexp, `/${item.from}`);
              createRedirect({
                fromPath: redirect,
                toPath: url, isPermanent: true, redirectInBrowser: true
              });
              createRedirect({
                fromPath: redirect.replace(/\/$/, '')+'.html',
                toPath: url, isPermanent: true,
                redirectInBrowser: true, redirectInBrowser: true
              });
              createRedirect({
                fromPath: redirect.replace(/\/$/, ''),
                toPath: url, isPermanent: true, redirectInBrowser: true
              });
            }
          });
        }
      });
      resolve();
    })
  });
}
