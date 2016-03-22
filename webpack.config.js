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
            { test: /\.ts$/, exclude:/Spec\.ts$/i, loaders: ['tslint'] }
        ],
        loaders: [
            { test: /\.html$/, exclude:/node_modules/, loaders: ['html'] },
            { test: /Spec\.ts$/i, exclude:/node_modules/, loaders: ['ts'] },
            { test: /\.tsx?$/, exclude:/node_modules/, loaders: ['ts'] }
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
    tslint: {
        emitErrors: true
    }
};

module.exports = webpackConfig;