var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

gulp.task('copy', function (callback) {
    var files = config.path.copy;
    var stream;
    for (var i = 0,len = files.length; i < len; i++) {
        stream = gulp.src(frontplate.path(files[i].from))
            .pipe(gulp.dest(frontplate.path(files[i].to)));
    }
    return stream;
});