var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

module.exports = function (src) {
    return gulp.src(src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        //.pipe($.w3cjs())
        .pipe($.htmlhint())
        .pipe($.htmlhint.reporter());

};


