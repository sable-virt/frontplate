/**
 * HTML Lintタスク
 * HTMLが変更されたときにLintを通す
 */
var gulp = require('gulp');
var config = require('./config');
var $ = require('./plugins');

gulp.task('html', function() {
    return gulp.src(config.path.html.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.htmlhint(config.htmlhint))
        .pipe($.htmlhint.reporter())
        .pipe($.htmlhint.failReporter());
});