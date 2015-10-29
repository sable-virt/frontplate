/**
 * クリーンタスク
 * 指定されたディレクトリ以下をすべて削除する
 */
var gulp = require('gulp');
var del = require('del');
var config = require('./config');

gulp.task('clean', function(callback) {
    del.sync([config.dist]);
    callback();
});