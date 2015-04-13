var gulp = require('gulp');

module.exports = function () {
    gulp.task('style', function() {
        return gulp.src(__CONFIG.path.style.src)
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.frontnote({
                out: './guide/',
                css: (__CONFIG.styleguide && __CONFIG.styleguide.css) ? __CONFIG.styleguide.css : null,
                script: (__CONFIG.styleguide && __CONFIG.styleguide.script) ? __CONFIG.styleguide.script : null
            }))
            .pipe($.sass({
                errLogToConsole: true,
                sourceComments: 'normal',
                sourceMap: __IS_PRODUCTION ? false : true
            }))
            .pipe($.autoprefixer(__CONFIG.autoprefixer.browser))
            .pipe($.if(__IS_PRODUCTION,$.csso()))
            .pipe(gulp.dest(__CONFIG.path.style.dest))
            .pipe($.browser.stream());
    });
}();