var gulp = require('gulp');
gulp.task('copy', function (callback) {
    var files = config.path.copy;
    var stream;
    for (var i = 0,len = files.length; i < len; i++) {
        stream = gulp.src(files[i].from)
            .pipe(gulp.dest(files[i].to));
    }
    return stream;
});