/**
 * HTML Lintタスク
 * HTMLが変更されたときにLintを通す
 */
import gulp from 'gulp';
import config from './config';

gulp.task('html', () => {
    return gulp.src(config.path.html.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.htmlhint(config.htmlhint))
        .pipe($.htmlhint.reporter())
        .pipe($.htmlhint.failReporter());
});