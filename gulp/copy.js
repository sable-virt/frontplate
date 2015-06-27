/**
 * 複製タスク
 * 指定されたファイルを指定されたディレクトリに複製する
 */
var gulp = require('gulp');
var _ = require('lodash');
var ms = require('merge-stream');

gulp.task('copy', function () {
    var files = __CONFIG.path.copy;
    var stream = ms();
    _.forEach(files,function(file) {
        stream.add(gulp.src(file.from)
            .pipe(gulp.dest(file.to)));
    });
    return stream;
});