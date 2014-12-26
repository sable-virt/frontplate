var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

module.exports = function () {
    gulp.task('style', function() {
        return gulp.src(frontplate.getPath('sass'))
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.sass({
                errLogToConsole: true,
                sourceComments: 'normal',
                sourceMap: true
            }))
            .pipe($.autoprefixer(config.autoprefixer.browser))
            .pipe($.if(frontplate.option.min,$.csso()))
            .pipe(gulp.dest(frontplate.getPath('sass','dest')))
            .pipe($.browser.reload({stream: true}));
    });
}();