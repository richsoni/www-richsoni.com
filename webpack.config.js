var webpack = require('webpack');
var path = require('path');

const config = {};
config.module = {};
config.stats = { children: true };

config.entry = { app: './frontend/entry.js' }; // The key here is used as the name in output
config.output = {
  filename: "./bundle.js",
  path: __dirname,
};

config.module.rules = []
config.plugins = []

// To require styles in Webpack, you can use require directly in a js file
// This plugin will extract these, and create a css bundle
// https://webpack.js.org/plugins/extract-text-webpack-plugin/#usage-example-with-css
// TODO: our SASS can be compiled with the sass-loader in a similar fashion

const ExtractTextPlugin = require("extract-text-webpack-plugin");
config.plugins.push( new ExtractTextPlugin('css/[name].[chunkhash].css') );

config.module.rules.push({
  test: /^((?!\.module).)*\.css$/,
  loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
});

config.module.rules.push({
  test: /\.module.css$/,
  loader: ExtractTextPlugin.extract({ fallback: 'style-loader',
  use: [{
    loader: 'css-loader',
    options: {
      autoprefixer: true,
      localIdentName: '[local]__[name]__[hash:base64:5]',
      modules: true,
      sourceMap: true,
      importLoaders: 1,
    }
  }, ]}),
});

// Babel
// https://webpack.js.org/loaders/babel-loader
// check the .babelrc file
// It should be setup to transpile es6 and JSX
  config.module.rules.push({
    test: [/\.js$/, /\.jsx?$/],
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    }
  })


module.exports = config;
