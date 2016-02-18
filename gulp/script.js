'use strict';
/**
 * スクリプトタスク
 * JSファイルをwebpackを使ってコンパイルして出力する
 */

let path = require('path');
let fs = require('fs');
let gulp = require('gulp');
let through = require('through2');
let webpack = require('webpack');
let config = require('./config');
let $ = require('./plugins');
let conf;
const FILE_EXT = /\.(ts|js)$/;
/**
 * エントリーの登録
 */
gulp.task('_setEntries', () => {
    conf = require('../webpack.config.js');
    if (config.IS_PRODUCTION) {
        delete conf.devtool;
    }
    return gulp.src(config.path.js.src)
        .pipe(through.obj(function(file,charset,callback) {
            conf.entry = conf.entry || {};
            let fileName = path.basename(file.path).replace(FILE_EXT,'');
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
function exeWebPack(watch,callback) {
    conf.watch = watch;
    conf.output.path = config.path.js.dest;
    webpack(conf, (err, stats) => {
        if(err) return console.error(err);
        let jsonStats = stats.toJson();
        if(jsonStats.errors.length > 0) {
            jsonStats.errors.forEach((value) => {
                console.error(value);
            });
            return;
        }
        if(jsonStats.warnings.length > 0) {
            jsonStats.warnings.forEach((value) => {
                console.log(value);
            });
        }
        $.browser.reload();
        if (callback) callback();
        callback = null;
    });
}

/**
 * スクリプトコンパイルタスク
 */
gulp.task('script',['_setEntries'], (callback) => {
    return exeWebPack(false,callback);
});

/**
 * スクリプト監視タスク
 */
gulp.task('watchScript',['_setEntries'], (callback) => {
    return exeWebPack(true,callback);
});
