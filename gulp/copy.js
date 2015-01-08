var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

gulp.task('copy', function (callback) {
    var files = config.path.copy;
    for (var i = 0,len = files.length; i < len; i++) {
        gulp.src(frontplate.path(files[i].from))
            .pipe(gulp.dest(frontplate.path(files[i].to)));
    }
});