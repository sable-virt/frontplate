/**
 * クリーンタスク
 * 指定されたディレクトリ以下をすべて削除する
 */
import gulp from 'gulp';
import del from 'del';

gulp.task('clean', (callback) => {
    del(__CONFIG.dist,callback);
});