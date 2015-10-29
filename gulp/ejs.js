/**
 * EJSタスク
 * EJSで作られたファイルを指定ディレクトリにコンパイルして出力する
 */
var gulp = require('gulp');
var config = require('./config');
var $ = require('./plugins');

gulp.task('ejs', function() {
    return gulp.src(config.path.ejs.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.ejs(config.ejs))
        .pipe(gulp.dest(config.path.ejs.dest))
        .pipe($.browser.stream());
});