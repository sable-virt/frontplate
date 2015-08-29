/**
 * スタイルガイドタスク
 * 指定されたCSSが変更されたときに指定したディレクトリにスタイルガイドを出力する
 */
import gulp from 'gulp';

gulp.task('guide', () => {
    return gulp.src(__CONFIG.path.style.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.frontnote(__CONFIG.styleguide));
});