// const fs = require('fs')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // publicPath: process.env.NODE_ENV === 'development' ? '/' : '/vue/tong/v1',
  publicPath: process.env.VUE_APP_BASEURL,
  filenameHashing: true,
  productionSourceMap: (process.env.NODE_ENV !== 'production') && (process.env.NODE_ENV !== 'preproduction'),
  chainWebpack: config => {
    // 添加分析工具
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpach-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
        config.plugin.delete('predetch')
      }
    }
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 preload 插件
    config.plugins.delete('preload')

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
  configureWebpack: config => {
    // 调试JS
    config.devtool = 'source-map'
  },
  css: {
    loaderOptions: {
      sass: {
        // @是src的别名
        // data: '@import "@/assets/css/variable.scss";'
      }
    }
  },
  transpileDependencies: [],
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
