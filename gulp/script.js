/**
 * スクリプトタスク
 * JSファイルをwebpackを使ってコンパイルして出力する
 */

import path from 'path';
import fs from 'fs';
import gulp from 'gulp';
import _ from 'lodash';
import through from 'through2';
import ws from 'webpack-stream';
import webpack from 'webpack';
import config from './config';
import $ from './plugins';

let conf;

/**
 * エントリーの登録
 */
gulp.task('_setEntries', () => {
    conf = require('../webpack.config.js');
    return gulp.src(config.path.js.src)
        .pipe(through.obj(function(file,charset,callback) {
            conf.entry = conf.entry || {};
            var fileName = path.basename(file.path).replace(/\.(ts|js)$/,'');
            conf.entry[fileName] = file.path;
            this.push(file);
            callback();
        }));
});

/**
 * webpackコンパイル開始
 * @param watch
 * @returns {*}
 */
function exeWebPack(watch) {
    conf.watch = watch;
    gulp.src(config.path.js.src)
        .pipe(ws(conf,webpack))
        .on('data', () => {
            $.browser.reload();
        })
        .pipe(gulp.dest(config.path.js.dest));
}

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
