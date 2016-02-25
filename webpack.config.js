'use strict';
let webpack = require("webpack");

let webpackConfig = {
    output: {
        filename: "[name].js",
        sourceMapFilename: 'maps/[name].map',
        jsonpFunction: 'fr'
    },
    devtool: '#source-map',
    resolve: {
        modulesDirectories: [
            'bower_components',
            'node_modules',
            'src'
        ]
    },
    module: {
        preLoaders: [
            { test: /\.js$/, exclude:/Spec\.js$/i, loaders: ['eslint'] }
        ],
        loaders: [
            { test: /\.html$/, exclude:/node_modules/, loaders: ['html'] },
            { test: /Spec\.js$/i, exclude:/node_modules/, loaders: ['webpack-espower','babel'] },
            { test: /\.jsx?$/, exclude:/node_modules/, loaders: ['babel'] }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            exclude: /Spec\.js$/i,
            compress: {
                warnings: false
            }
        }),
        //new webpack.optimize.CommonsChunkPlugin('app','app.js'),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin()
    ],
    eslint: {
        configFile: '.eslintrc',
        failOnError: true
    }
};

module.exports = webpackConfig;