"use strict";

let gulp = require('gulp');
let runSequence = require('run-sequence');

// gulpディレクトリのタスク読み込み
let tasks = require('./gulp/load');
let config = require('./gulp/config');

/**
 * 監視タスク
 */
gulp.task('watch', () => {
    gulp.watch(config.path.ejs.watch, ['ejs']);
    gulp.watch(config.path.html.src, ['html']);
    gulp.watch(config.path.style.watch, ['style']);
    gulp.watch(config.path.sprite.watch, ['sprite','style', 'copy']);

    var copyWatches = [];
    // 複製タスクはループで回して監視対象とする
    if (config.path.copy) {
        config.path.copy.forEach((src) => {
            copyWatches.push(src.from);
        });
        gulp.watch(copyWatches, ['copy']);
    }
});

/**
 * ビルドタスク
 */
gulp.task('build', ['clean'], (callback) => {
    return runSequence('sprite', ['ejs', 'script', 'style', 'copy'], callback);
});

/**
 * プロダクションリリースタスク
 */
gulp.task('production', (callback) => {
    config.IS_PRODUCTION = true;
    return runSequence('build','test',callback);
});

/**
 * デフォルトタスク
 */
var defaultTasks = ['server','watch','watchScript'];
if (config.autoTest) {
    defaultTasks.push('watchTest');
}
gulp.task('default', () => {
    return runSequence(defaultTasks);
});