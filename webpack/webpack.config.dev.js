const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
    // 设置为开发模式
    mode: 'development',
    // 便于调试
    devtool: 'inline-source-map',
    // 配置服务端目录和端口
    devServer: {
            host: '127.0.0.1',
            port: 4321,
            hot: true,
    }
})