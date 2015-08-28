/**
 * スクリプトタスク
 * JSファイルをwebpackを使ってコンパイルして出力する
 */
var _ = require('lodash'),
    gulp = require('gulp'),
    through = require('through2'),
    path = require('path'),
    ws = require('webpack-stream'),
    webpack = require('webpack'),
    conf = _.clone(require('../webpack.config.js'));

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

gulp.task('_setEntries', function() {
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
gulp.task('script',['_setEntries'], function() {
    return exeWebPack(false);
});

/**
 * スクリプト監視タスク
 */
gulp.task('watchScript',['_setEntries'], function() {
    return exeWebPack(true);
});
