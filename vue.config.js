const { defineConfig } = require('@vue/cli-service')
module.exports = {
  chainWebpack: (config) => {
  config.plugins.delete('prefetch') //prefetch 삭제
  }
}

 /*defineConfig({
  transpileDependencies: true
})*/
