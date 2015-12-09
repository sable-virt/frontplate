/**
 * スクリプトタスク
 * JSファイルをwebpackを使ってコンパイルして出力する
 */

var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var _ = require('lodash');
var through = require('through2');
var webpack = require('webpack');
var config = require('./config');
var $ = require('./plugins');

var conf;

/**
 * エントリーの登録
 */
gulp.task('_setEntries', function() {
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
    conf.output.path = config.path.js.dest;
    webpack(conf, function(err, stats) {
        if(err) return console.error(err);
        var jsonStats = stats.toJson();
        if(jsonStats.errors.length > 0) return console.error(jsonStats.errors);
        if(jsonStats.warnings.length > 0) return console.error(jsonStats.warnings);
        $.browser.reload();
    });
}

/**
 * スクリプトコンパイルタスク
 */
gulp.task('script',['_setEntries'], function() {
    return exeWebPack(false);
});

/**
 * スクリプト監視タスク
 */
gulp.task('watchScript',['_setEntries'], function() {
    return exeWebPack(true);
});