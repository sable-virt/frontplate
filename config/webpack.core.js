'use strict';
const webpack = require("webpack");
/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
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
    resolve: { modules: [ './src/js'] },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'eslint', enforce: 'pre'},
            {test: /\.html$/, loader: 'html'},
            {test: /\.json$/, loader: 'json'},
        ],
        exprContextCritical: false
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile: __dirname + '/../.eslintrc',
                    failOnError: true
                }
            }
        })
    ]
};
module.exports = webpackConfig;