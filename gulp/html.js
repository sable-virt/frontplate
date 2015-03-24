var gulp = require('gulp');

module.exports = function () {
    gulp.task('html', function () {
        return gulp.src(config.path.html.src)
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.htmlhint(config.htmlhint))
            .pipe($.htmlhint.reporter())
            .pipe($.htmlhint.failReporter());
    });
}();