/**
 * クリーンタスク
 * 指定されたディレクトリ以下をすべて削除する
 */
var gulp = require('gulp'),
    del = require('del');

gulp.task('clean', function (callback) {
    del(__CONFIG.dist,callback);
});