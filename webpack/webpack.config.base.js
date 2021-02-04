const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 模版文件
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html')
})
const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'style/[name].[hash].css',
    chunkFilename: 'style/[id].[hash].css'
})

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash].bundle.js'
    },
    module: {
        rules: [
            // 转义 js
            {
                test: /\.(mjs|js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            // 匹配css
            { test: /\.css$/, use: ["style-loader", "css-loader?modules"]},
            { test: /\.less$/, use: ["style-loader", "css-loader?modules", "less-loader"] },
            // 对图片进行处理
            {
                test: /\.(png|jpg|gif|woff|svg|eat|ttf)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'assets/[hash].[ext]',
                        // encoding: 'utf8'
                    }
                }]
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin,
        miniCssExtractPlugin,
        new CleanWebpackPlugin()
        
    ],
    resolve: {
        extensions: ['.mjs', '.js', '.jsx']
    },
}