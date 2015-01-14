var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

module.exports = function () {
    gulp.task('html', function () {
        return gulp.src(frontplate.getPath('html'))
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.htmlhint(frontplate.config.htmlhint))
            .pipe($.htmlhint.reporter())
            .pipe($.htmlhint.failReporter());
    });
}();