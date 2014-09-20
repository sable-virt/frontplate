var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

module.exports = function () {
    gulp.task('htmllint',function() {
        return gulp.src(frontplate.getPath('html'))
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            //.pipe($.w3cjs())
            .pipe($.htmlhint())
            .pipe($.htmlhint.reporter());
    });
}();


