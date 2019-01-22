const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rootPath = path.resolve(__dirname, './');
const isProd = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;
const config = {
    mode: isProd ? 'production' : 'development',
    entry: {
        main: path.resolve(rootPath, './index.js'),
    },
    output: {
        path: path.resolve(rootPath, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(rootPath, './dist')]),
        new HtmlWebpackPlugin({
            title: 'Tracker.js Example',
        }),
    ],
};

if (!isProd) {
    Object.assign(config, {
        devtool: "inline-source-map",
        watch: true,
        devServer: {
            contentBase: path.resolve(rootPath, './dist'),
            port,
        },
    })
}

module.exports = config;
