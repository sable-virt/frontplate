/**
 * クリーンタスク
 * 指定されたディレクトリ以下をすべて削除する
 */
import gulp from 'gulp';
import del from 'del';
import config from './config';

gulp.task('clean', (callback) => {
    del.sync([config.dist]);
    callback();
});