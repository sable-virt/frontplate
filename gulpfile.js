var gulp = require('gulp'),
    config = require('./config');
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

var runSequence = require('run-sequence');
$.browser = require('browser-sync');

// globalに共通変数書き出し
global.$ = $;
global.config = config;

gulp.task('watch', function() {
    gulp.watch(getPath('ejs','watch'), ['ejs']);
    gulp.watch(getPath('html'), ['html']);
    gulp.watch(getPath('sass'), ['style']);
    gulp.watch(getPath('sprite','watch'), ['sprite','style','copy']);
    gulp.watch(getPath('images'), ['copy']);
});

// gulpディレクトリのタスク読み込み
var tasks = require('./gulp/load');
gulp.task('build',['clean'], function(callback) {
    return runSequence('sprite',['ejs','script','style','copy'], callback);
});
gulp.task('default',['server','watch','watchScript','testWatch'], function() {});