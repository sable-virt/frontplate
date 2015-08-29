/**
 * スクリプトタスク
 * JSファイルをwebpackを使ってコンパイルして出力する
 */

import path from 'path';
import gulp from 'gulp';
import _ from 'lodash';
import through from 'through2';
import ws from 'webpack-stream';
import webpack from 'webpack';
import conf from '../webpack.config.js';

/**
 * webpackコンパイル開始
 * @param watch
 * @returns {*}
 */
function exeWebPack(watch) {
    conf.watch = watch;
    gulp.src(__CONFIG.path.js.src)
        .pipe(ws(conf,webpack))
        .pipe(gulp.dest(__CONFIG.path.js.dest))
        .pipe($.browser.stream());
}

gulp.task('_setEntries', () => {
    return gulp.src(__CONFIG.path.js.src)
        .pipe(through.obj(function(file,charset,callback) {
            conf.entry = conf.entry || {};
            var fileName = path.basename(file.path).replace(/\.(ts|js)$/,'');
            conf.entry[fileName] = file.path;
            this.push(file);
            callback();
        }));
});

/**
 * スクリプトコンパイルタスク
 */
gulp.task('script',['_setEntries'], () => {
    return exeWebPack(false);
});

/**
 * スクリプト監視タスク
 */
gulp.task('watchScript',['_setEntries'], () => {
    return exeWebPack(true);
});
