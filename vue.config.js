// ------------------------------------------------------------------------------
// name: vue.config.js
// ------------------------------------------------------------------------------

const path = require('path');
const Webpack = require('webpack');


// 配置集合
const webpackConfig = {
  // publicPath: config.basePath,
  outputDir: 'dist',
  assetsDir: 'static',

  // 调试配置
  devServer: {
    // 跨域配置
    proxy: {
      '/api': {
        target: 'https://www.runoob.com',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  }
};

module.exports = webpackConfig;
