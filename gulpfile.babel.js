import gulp from 'gulp';
import runSequence from 'run-sequence';

// gulpディレクトリのタスク読み込み
import tasks from './gulp/load';

global.__CONFIG = tasks.config;
global.__IS_PRODUCTION = false;
global.$ = tasks.plugins;

/**
 * 監視タスク
 */
gulp.task('watch', () => {
    gulp.watch(__CONFIG.path.ejs.watch, ['ejs']);
    gulp.watch(__CONFIG.path.html.src, ['html']);
    gulp.watch(__CONFIG.path.style.src, ['guide','style']);
    gulp.watch(__CONFIG.path.sprite.watch, ['sprite', 'guide','style', 'copy']);

    var copyWatches = [];
    // 複製タスクはループで回して監視対象とする
    if (__CONFIG.path.copy) {
        __CONFIG.path.copy.forEach((src) => {
            copyWatches.push(src.from);
        });
        gulp.watch(copyWatches, ['copy']);
    }
});

/**
 * ビルドタスク
 */
gulp.task('build', ['clean'], (callback) => {
    runSequence('sprite', ['ejs', 'script', 'style', 'copy'], callback);
});

/**
 * プロダクションリリースタスク
 */
gulp.task('production', (callback) => {
    global.__IS_PRODUCTION = true;
    runSequence('build', callback);
});

/**
 * デフォルトタスク
 */
gulp.task('default', ['server','watch','watchScript','watchTest'], () => {});