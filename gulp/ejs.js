var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

module.exports = function () {
    gulp.task('ejs',function() {
        return gulp.src(frontplate.getPath('ejs'))
            .pipe($.plumber({
                errorHandler: function(e) {
                    this.unpipe();
                }
            }))
            .pipe($.ejs(config.ejs))
            .on('error', $.notify.onError("<%= error.message %>"))
            .pipe(gulp.dest(frontplate.getPath('ejs','dest')))
            .pipe($.browser.reload({stream: true}));
    });
}();


