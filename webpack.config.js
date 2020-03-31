module.exports = {
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
    },
  },
  module: {
    loaders: [
      {
        test: /.scss$/,
        loaders: ['style', 'css', 'sass']
      },
    ]
  },
};
