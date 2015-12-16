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
function exeWebPack(watch,callback) {
    conf.watch = watch;
    conf.output.path = config.path.js.dest;
    webpack(conf, function(err, stats) {
        if(err) return console.error(err);
        var jsonStats = stats.toJson();
        if(jsonStats.errors.length > 0) {
            jsonStats.errors.forEach(function(value) {
                console.error(value);
            });
            return;
        }
        if(jsonStats.warnings.length > 0) {
            jsonStats.warnings.forEach(function(value) {
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
gulp.task('script',['_setEntries'], function(callback) {
    return exeWebPack(false,callback);
});

/**
 * スクリプト監視タスク
 */
gulp.task('watchScript',['_setEntries'], function(callback) {
    return exeWebPack(true,callback);
});