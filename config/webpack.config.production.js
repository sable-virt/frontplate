'use strict';
const webpack = require("webpack");
const merge = require("webpack-merge");
const ClosureCompiler = require.main.require('google-closure-compiler-js').webpack;
const core = require("./webpack.core");
/**
 * webpack config for production
 * url: https://webpack.github.io/docs/configuration.html
 */
const webpackConfig = merge(core,{
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
        new ClosureCompiler({
            options: {
                languageIn: 'ECMASCRIPT6',
                languageOut: 'ECMASCRIPT5',
                compilationLevel: 'ADVANCED',
                warningLevel: 'QUIET',
            },
        }),
        // new webpack.optimize.CommonsChunkPlugin('app','app.js'),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
});
module.exports = webpackConfig;