var webpack = require("webpack");

module.exports = {
    output: {
        filename: "[name].js",
        sourceMapFilename: 'map/[file].map',
        jsonpFunction: 'fr'
    },
    devtool: '#source-map',
    resolve: {
        extensions: ['','.js','.ts'],
        modulesDirectories: [
            'bower_components',
            'node_modules'
        ]
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.ts$/, loader: 'typescript-loader?noImplicitAny=false' },
            { test: /Spec\.js$/, loader: 'webpack-espower-loader' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __IS_PRODUCTION: JSON.stringify(global.__IS_PRODUCTION)
        }),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.optimize.CommonsChunkPlugin('app','app.js'),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin()
    ]
};
