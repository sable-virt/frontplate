var webpack = require("webpack");
module.exports = {
    watchDelay: 500,
    output: {
        filename: "[name].js",
        sourceMapFilename: 'map/[file].map',
        publicPath: "/js/"
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
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common','common.js'),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
};