'use strict';
/**
 * クリーンタスク
 * 指定されたディレクトリ以下をすべて削除する
 */
let gulp = require('gulp');
let del = require('del');
let config = require('./config');

gulp.task('clean', (callback) => {
    del.sync([config.dist]);
    callback();
});