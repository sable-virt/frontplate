/**
 * ユニットタスク
 * karmaを使ってユニットテストを実行する
 */
var gulp = require('gulp');
var karma = require('karma').server;
var runner = require('karma').runner;

gulp.task('runTest', function(callback) {
    runner.run({
        configFile: process.cwd() + '/karma.conf.js'
    },function(exitCode) {
        //process.exit(exitCode);
        callback();
    });
});

gulp.task('test', function(callback) {
    karma.start({
        configFile: process.cwd() + '/karma.conf.js',
        singleRun: true,
        autoWatch: false
    },callback);
});
gulp.task('watchTest', function(callback) {
    karma.start({
        configFile: process.cwd() + '/karma.conf.js',
        singleRun: false,
        autoWatch: true
    },callback);
});