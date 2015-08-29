/**
 * ユニットタスク
 * karmaを使ってユニットテストを実行する
 */
import gulp from 'gulp';
import {Server,runner} from 'karma';
const CONFFILE = process.cwd() + '/karma.conf.js';

gulp.task('test', (callback) => {
    let server = new Server({
        configFile: CONFFILE,
        singleRun: true,
        autoWatch: false
    },callback);
    server.start();
});

gulp.task('watchTest', (callback) => {
    let server = new Server({
        configFile: CONFFILE,
        singleRun: false,
        autoWatch: true
    },callback);
    server.start();
});