// const fs = require('fs')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const webpack = require('webpack')

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  productionSourceMap: (process.env.NODE_ENV !== 'production') && (process.env.NODE_ENV !== 'preproduction'),
  chainWebpack: config => {
    // 路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('/src/assets'))
      .set('@comps', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@js', resolve('src/assets/js'))
      .set('@config', resolve('src/config'))
  },
  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      // 下面是下载的插件的配置
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 100
      })
    ]
  },
  /**
   * 本地代理配置
   * 完整选项：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
   */
  devServer: {
    proxy: {
      '/common': {
        // target: 'http://t.hanhua.com'
        // target: 'http://htuat.hanhua.com'
        target: 'http://api.apishop.net'
      }
      // http://10.10.80.152:8200/retfp/apiproxy/proxy/switch
    }
  }
}
