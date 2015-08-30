import webpack from "webpack";
import config from './gulp/config';

var webpackConfig = {
    output: {
        filename: "[name].js",
        sourceMapFilename: 'maps/[name].map',
        jsonpFunction: 'f'
    },
    devtool: '#source-map',
    resolve: {
        modulesDirectories: [
            'bower_components',
            'node_modules',
            'src',
            'lib'
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
        ],
        noParse: ['node_modules','bower_components']
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_PRODUCTION: config.IS_PRODUCTION
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

export default webpackConfig;