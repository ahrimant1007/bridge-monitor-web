module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    // webpack config chain
    return config;
  },
  productionSourceMap: false,
  devServer: {
    port: 5000,
    proxy: {
      '/api': {
        target: 'http://localhost:18080/',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      },
    }
  }
};
