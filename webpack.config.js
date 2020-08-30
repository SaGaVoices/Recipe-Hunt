const path = require('path');
// const fs = require('fs');
// const url = require('url');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
// const appDirectory = fs.realpathSync(process.cwd());
// const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
// const appPath = resolveApp('./src/js')


module.exports = {
    entry: ['@babel/polyfill', './src/js'], //['babel-polyfill'], 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }]
    }
};