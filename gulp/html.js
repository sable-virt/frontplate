'use strict';
/**
 * HTML Lintタスク
 * HTMLが変更されたときにLintを通す
 */
let gulp = require('gulp');
let config = require('./config');
let $ = require('./plugins');

gulp.task('html', () => {
    return gulp.src(config.path.html.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.htmlhint(config.htmlhint))
        .pipe($.htmlhint.reporter())
        .pipe($.htmlhint.failReporter());
});