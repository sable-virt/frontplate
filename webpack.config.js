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
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_component)/,
                loader: "jshint-loader"
            }
        ],
        loaders: [
            { test: /\.html$/, loader: 'html-loader' },
            //{ test: /angular\.js$/, loader: 'exports?angular' },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common','common.js'),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            _: 'lodash'
        })
    ]
};