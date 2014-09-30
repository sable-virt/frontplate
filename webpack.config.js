var webpack = require("webpack");
var config = require('./frontplate');
module.exports = {
    watchDelay: 500,
    output: {
        filename: "[name].js",
        sourceMapFilename: 'map/[file].map'
    },
    devtool: config.debug ? '#eval' : '#source-map',
    resolve: {
        modulesDirectories: ["bower_components","node_modules"],
        alias: {
            bower: 'bower_components'
        }
    },
    module: {
        preLoaders: [
            {
                loader: "source-map-loader"
            }
        ],
        loaders: [
            { test: /\.html$/, loader: 'html-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common','common.js'),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.optimize.DedupePlugin()
    ]
};