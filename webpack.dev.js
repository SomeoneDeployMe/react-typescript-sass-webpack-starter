const merge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'cheap-module-eval-source-map',
    watchOptions: {
        ignored: ['dist', 'node_modules']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.WatchIgnorePlugin([
          /\.js$/,
          /\.d\.ts$/
        ]),
        new MiniCssExtractPlugin({
            filename: 'styles/styles.css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        }),
    ],
});
