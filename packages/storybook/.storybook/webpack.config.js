module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    enforce: 'pre',
    loader: 'tslint-loader',
    options: {
      emitErrors: true,
    }
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};