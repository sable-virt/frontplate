var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

module.exports = function () {
    gulp.task('jshint',function() {
        return gulp.src(frontplate.getPath('js'))
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.jshint())
            .pipe($.jshint.reporter('jshint-stylish'))
            .pipe($.jshint.reporter('fail'));
    });
}();