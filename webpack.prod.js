const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: 'js/bundle.[hash].min.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
                output: {
                    comments: false
                }
            }
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/styles.[hash].min.css',
            chunkFilename: '[id].[hash].css',
            ignoreOrder: false
        }),
    ],
});
