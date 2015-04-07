var gulp = require('gulp');

module.exports = function () {
    gulp.task('html', function () {
        return gulp.src(__CONFIG.path.html.src)
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.htmlhint(__CONFIG.htmlhint))
            .pipe($.htmlhint.reporter())
            .pipe($.htmlhint.failReporter());
    });
}();