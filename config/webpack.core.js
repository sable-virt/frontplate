'use strict';
const webpack = require("webpack");
const webpackConfig = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: 'public/assets/js',
        publicPath: '/assets',
        filename: "[name].js",
        sourceMapFilename: 'maps/[name].map',
        jsonpFunction: 'fr'
    },
    resolve: { root: [ './src/js'] },
    module: {
        preLoaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'eslint'}
        ],
        loaders: [
            {test: /\.html$/, loader: 'html'},
            {test: /\.json$/, loader: 'json'},
        ],
        exprContextCritical: false
    },
    eslint: {
        configFile: __dirname + '/../.eslintrc',
        failOnError: true
    }
};
module.exports = webpackConfig;