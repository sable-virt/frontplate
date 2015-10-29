/**
 * ユニットタスク
 * karmaを使ってユニットテストを実行する
 */
var gulp = require('gulp');
var Server = require('karma').Server;
var CONFFILE = process.cwd() + '/karma.conf.js';

gulp.task('test', function(callback) {
    var server = new Server({
        configFile: CONFFILE,
        singleRun: true,
        autoWatch: false
    },callback);
    server.start();
});

gulp.task('watchTest', function(callback) {
    var server = new Server({
        configFile: CONFFILE,
        singleRun: false,
        autoWatch: true
    },callback);
    server.start();
});