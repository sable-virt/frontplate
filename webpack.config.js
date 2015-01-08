var webpack = require("webpack");
module.exports = {
    watchDelay: 500,
    output: {
        filename: "[name].js",
        sourceMapFilename: 'map/[file].map'
    },
    devtool: '#source-map',
    resolve: {
        modulesDirectories: ["bower_components","node_modules"],
        alias: {
            bower: 'bower_components'
        }
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('main','main.js'),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.optimize.DedupePlugin()
    ]
};