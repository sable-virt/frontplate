'use strict';
const webpack = require("webpack");
const merge = require("webpack-merge");
const core = require("./webpack.core");
/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
const webpackConfig = merge(core, {
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel?babelrc=' + __dirname + '/../.babelrc'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.BannerPlugin({
            banner: 'console.warn("This script is development version.");',
            raw: true
        })
    ]
});
module.exports = webpackConfig;