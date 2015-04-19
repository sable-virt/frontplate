var gulp = require('gulp');
var runSequence = require('run-sequence');

// gulpディレクトリのタスク読み込み
var tasks = require('./gulp/load');
global.__CONFIG = tasks.config;
global.__IS_PRODUCTION = false;
global.$ = tasks.plugins;

gulp.task('watch', function () {
    gulp.watch(__CONFIG.path.ejs.watch, ['ejs']);
    gulp.watch(__CONFIG.path.html.src, ['html']);
    gulp.watch(__CONFIG.path.style.watch, ['style','guide']);
    gulp.watch(__CONFIG.path.sprite.watch, ['sprite', 'style','guide', 'copy']);
    gulp.watch(__CONFIG.path.test.src,['runTest']);

    var copyWatches = [];
    if (__CONFIG.path.copy) {
        __CONFIG.path.copy.forEach(function(src) {
            copyWatches.push(src.from);
        });
        gulp.watch(copyWatches, ['copy']);
    }
});
gulp.task('build', ['clean'], function (callback) {
    runSequence('sprite', ['ejs', 'script', 'style', 'copy'], callback);
});
gulp.task('production',function (callback) {
    global.__IS_PRODUCTION = true;
    runSequence('build', callback);
});
gulp.task('default', ['server','watch','watchScript','watchTest'], function () {});