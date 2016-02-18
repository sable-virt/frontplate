'use strict';
// Karma configuration
// Generated on Thu Jun 05 2014 00:09:58 GMT+0900 (JST)

let extend = require('extend');

module.exports = function(config) {
    let conf = require('./gulp/config');
    let webpackConfig = extend({},require('./webpack.config'));
    // entryをdeleteしないとwatch時に無駄なコンパイルが発生する
    delete webpackConfig.entry;
    // outputをdeleteしないとts-loader使った時などに、拡張子のない謎のファイルができることがある
    delete webpackConfig.output;
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],

        // list of files / patterns to load in the browser
        files: conf.path.test.src,
        exclude: [],
        preprocessors: {
            'src/**/test/**/*.js': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            //noInfo: true,
            quiet: true
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress','notify'],
        client: {
            captureConsole: true,
            mocha: {
                reporter: 'html'
            }
        },

        // web server port
        port: 9001,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
