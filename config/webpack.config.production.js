'use strict';
const webpack = require("webpack");
const merge = require("webpack-merge");
const ClosureCompiler = require.main.require('google-closure-compiler-js').webpack;
const core = require("./webpack.core");
const webpackConfig = merge(core,{
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'webpack-unassert',
                    'babel?presets[]=es2015'
                ]
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
        //new webpack.optimize.CommonsChunkPlugin('app','app.js'),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'NODE_ENV': 'production'
        })
    ],
});
module.exports = webpackConfig;