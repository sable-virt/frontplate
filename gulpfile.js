var gulp = require('gulp');
var runSequence = require('run-sequence');

// gulpディレクトリのタスク読み込み
var tasks = require('./gulp/load');
global.$ = tasks.plugins;
global.__CONFIG = tasks.config;
global.__IS_PRODUCTION = false;

gulp.task('watch', function () {
    gulp.watch(__CONFIG.path.ejs.watch, ['ejs']);
    gulp.watch(__CONFIG.path.html.src, ['html']);
    gulp.watch(__CONFIG.path.style.src, ['style']);
    gulp.watch(__CONFIG.path.sprite.watch, ['sprite', 'style', 'copy']);
    gulp.watch(__CONFIG.path.test.src,['test']);

    var copyWatches = [];
    if (__CONFIG.path.copy) {
        __CONFIG.path.copy.forEach(function(src) {
            copyWatches.push(src.from);
        });
        gulp.watch(copyWatches, ['copy']);
    }
});
gulp.task('build', ['clean'], function (callback) {
    return runSequence('sprite', ['ejs', 'script', 'style', 'copy'], callback);
});
gulp.task('production',function (callback) {
    global.__IS_PRODUCTION = true;
    return runSequence('build', callback);
});
gulp.task('default', ['watch','watchScript','watchTest','server'], function () {
});