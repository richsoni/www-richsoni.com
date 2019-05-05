module.exports = {
  plugins: [
  'gatsby-plugin-netlify-cms',
  'gatsby-plugin-typescript',
  'gatsby-plugin-typescript-checker',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'events',
      path: `${__dirname}/node_modules/@richsoni/events/data/`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'src',
      path: `${__dirname}/src/`,
    },
  },
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [{
        resolve: 'gatsby-remark-embed-spotify',
        options: {
          width: 400,
          height: 100,
        }
      }]
    }
  },
  {
    resolve: 'gatsby-plugin-pathdata',
    options: {
      matchNodeType: 'MarkdownRemark',
      extract: [
        {
          name: 'path',
          selector: /.+\/(.*)\.md$/,
          replacer: '/$1/'
        },
        {
          name: 'notdate',
          selector: /.+\/\d+-\d+-\d+-([\w-]+)\.md$/,
          replacer: '$1'
        },
        {
          name: 'date',
          selector: /.+\/(\d+-\d+-\d+)-[\w-]+\.md$/,
          replacer: '$1'
        }
      ]
    }
  },
  `gatsby-transformer-yaml`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./src/data/`,
    },
  },
  `gatsby-plugin-meta-redirect` // make sure to put last in the array
]};
