/**
 * EJSタスク
 * EJSで作られたファイルを指定ディレクトリにコンパイルして出力する
 */
import gulp from 'gulp';
import config from './config';
import $ from './plugins';

gulp.task('ejs', () => {
    return gulp.src(config.path.ejs.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.ejs(config.ejs))
        .pipe(gulp.dest(config.path.ejs.dest))
        .pipe($.browser.stream());
});