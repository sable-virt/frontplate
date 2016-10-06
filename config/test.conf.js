'use strict';
/**
 * karma conf
 * @param config
 * url: https://karma-runner.github.io/1.0/config/configuration-file.html
 */
module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'src/js/**/*-spec.js'
        ],
        preprocessors: {
            'src/js/**/*-spec.js': ['webpack','babel']
        },
        webpack: {
            resolve: { modules: [ './src/js'] },
        },
        webpackMiddleware: {
            quiet: true,
            stats: 'errors-only'
        },
        exclude: [],
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],
        client: {
            captureConsole: true
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
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
