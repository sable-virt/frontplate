var webpack = require("webpack");
module.exports = {
    watchDelay: 500,
    output: {
        filename: "[name].js",
        sourceMapFilename: 'map/[file].map'
    },
    devtool: '#source-map',
    resolve: {
        extensions: ['.ts', '.js', '']
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.ts$/, loader: 'typescript-loader?noImplicitAny=true' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('app','app.js'),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
};
