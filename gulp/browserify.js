var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

module.exports = function (src) {
    var stream = gulp.src(src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.browserify());
    if (frontplate.MINIFY) {
        stream.pipe($.uglify());
    }
    return stream;
};


