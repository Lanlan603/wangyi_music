const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 3001,
    client: {
      webSocketURL: 'ws://0.0.0.0:3001/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
      proxy: {
        '/api': {
          target: 'http://iwenwiki.com:3000',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
})
