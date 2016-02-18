'use strict';
/**
 * EJSタスク
 * EJSで作られたファイルを指定ディレクトリにコンパイルして出力する
 */
let gulp = require('gulp');
let config = require('./config');
let $ = require('./plugins');

gulp.task('ejs', () => {
    return gulp.src(config.path.ejs.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.ejs(config.ejs,{ext:'.html'}))
        .pipe(gulp.dest(config.path.ejs.dest))
        .pipe($.browser.stream());
});