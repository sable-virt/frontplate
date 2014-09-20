var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

module.exports = function () {
    gulp.task('imagemin',function() {
        return gulp.src(frontplate.getPath('images'))
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.imagemin())
            .pipe(gulp.dest(getPath('images','dest')))
            .pipe($.browser.reload({stream: true}));
    });
}();