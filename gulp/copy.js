/**
 * 複製タスク
 * 指定されたファイルを指定されたディレクトリに複製する
 */
import gulp from 'gulp';
import _ from 'lodash';
import ms from 'merge-stream';

gulp.task('copy', () => {
    let files = __CONFIG.path.copy;
    let stream = ms();
    _.forEach(files,(file) => {
        stream.add(gulp.src(file.from)
            .pipe(gulp.dest(file.to)));
    });
    return stream;
});