var webpack = require("webpack");

var webpackConfig = {
    output: {
        filename: "[name].js",
        sourceMapFilename: 'maps/[name].map',
        jsonpFunction: 'fr'
    },
    devtool: '#inline-source-map',
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
            { test: /\.js$/, exclude:/node_modules/, loaders: ['babel'] }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __IS_PRODUCTION: JSON.stringify(global.__IS_PRODUCTION)
        }),
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