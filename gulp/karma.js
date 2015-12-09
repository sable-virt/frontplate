/**
 * ユニットタスク
 * karmaを使ってユニットテストを実行する
 */
var gulp = require('gulp');
var Server = require('karma').Server;
var CONFFILE = process.cwd() + '/karma.conf.js';

gulp.task('test', function() {
    var server = new Server({
        configFile: CONFFILE,
        singleRun: true,
        autoWatch: false
    });
    server.start();
});

gulp.task('watchTest', function() {
    var server = new Server({
        configFile: CONFFILE,
        singleRun: false,
        autoWatch: true
    });
    server.start();
});