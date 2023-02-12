const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/webpack.js',
    devtool: 'source-map',
    devServer: {
        open: true,
        hot: false,
        port: 8080,
    },
    output: {
        filename: 'builed.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}