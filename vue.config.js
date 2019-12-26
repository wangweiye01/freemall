module.exports = {
  publicPath: '',
  devServer: {
    host: 'localhost',
    port: 9090,
    proxy: {
      '/mock': {
        target: 'http://localhost:9090',
        ws: false,
        // 将主机头的原点改为目标的URL
        changeOrigin: false
      }
    }
  }
}