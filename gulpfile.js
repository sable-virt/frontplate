var gulp = require('gulp');
var runSequence = require('run-sequence');

// gulpディレクトリのタスク読み込み
var tasks = require('./gulp/load');
global.$ = tasks.plugins;
global.config = tasks.config;
global.isProduction = false;

gulp.task('watch', function () {
    gulp.watch(config.path.ejs.watch, ['ejs']);
    gulp.watch(config.path.html.src, ['html']);
    gulp.watch(config.path.style.src, ['style']);
    gulp.watch(config.path.sprite.watch, ['sprite', 'style', 'copy']);
    gulp.watch(config.path.images, ['copy']);
});
gulp.task('build', ['clean'], function (callback) {
    return runSequence('sprite', ['ejs', 'script', 'style', 'copy'], callback);
});
gulp.task('production',function () {
    global.isProduction = true;
    return runSequence('build', callback);
});
gulp.task('default', ['server', 'watch', 'watchScript', 'testWatch'], function () {
});