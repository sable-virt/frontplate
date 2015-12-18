'use strict';
/**
 * ユニットタスク
 * karmaを使ってユニットテストを実行する
 */
let gulp = require('gulp');
let Server = require('karma').Server;
const CONFFILE = process.cwd() + '/karma.conf.js';

gulp.task('test', (callback) => {
    let server = new Server({
        configFile: CONFFILE,
        singleRun: true,
        autoWatch: false
    });
    server.start(callback);
});

gulp.task('watchTest', () => {
    let server = new Server({
        configFile: CONFFILE,
        singleRun: false,
        autoWatch: true
    });
    server.start();
});