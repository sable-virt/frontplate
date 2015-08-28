var webpack = require("webpack");

module.exports = {
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
            { test: /\.js$/, exclude: /node_modules|bower_components/, loader: 'eslint-loader' }
        ],
        loaders: [
            { test: /\.html$/, loader: 'html-loader' },
            { test: /test\/.*?Spec\.js$/, loader: 'webpack-espower-loader' },
            { test: /\.js/, exclude: /node_modules|bower_components/, loaders: ['babel-loader'] }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __IS_PRODUCTION: JSON.stringify(global.__IS_PRODUCTION)
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
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
