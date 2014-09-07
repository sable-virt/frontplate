var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

module.exports = function (src,dest) {
    return gulp.src(src)
        .pipe($.plumber({
            errorHandler: function(e) {
                this.unpipe();
            }
        }))
        .pipe($.ejs(config.ejs))
        .on('error', $.notify.onError("<%= error.message %>"));
};


