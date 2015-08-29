/**
 * スタイルガイドタスク
 * 指定されたCSSが変更されたときに指定したディレクトリにスタイルガイドを出力する
 */
import gulp from 'gulp';
import config from './config';

gulp.task('guide', () => {
    return gulp.src(config.path.style.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.frontnote(config.styleguide));
});