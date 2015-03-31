var gulp = require('gulp');
var ms = require('merge-stream');

gulp.task('copy', function (callback) {
    var files = config.path.copy;
    var stream = ms();
    for (var i = 0,len = files.length; i < len; i++) {
        stream.add(gulp.src(files[i].from)
            .pipe(gulp.dest(files[i].to)));
    }
    return stream;
});