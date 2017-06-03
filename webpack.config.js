module.exports = {
  entry: "./frontend/entry.js",
  output: {
    path: __dirname,
    filename: "./bundle.js"
  },
  module: {
    loaders: [
    { test: /\.css$/, loader: "style!css" },
    { test: /\.js$/, loader: "babel" }
    ]
  }
};
