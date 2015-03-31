var gulp = require('gulp');

module.exports = function () {
    gulp.task('style', function() {
        return gulp.src(config.path.style.src)
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.frontnote({
                out: './guide/',
                css: (config.styleguide && config.styleguide.css) ? config.styleguide.css : null,
                script: (config.styleguide && config.styleguide.script) ? config.styleguide.script : null
            }))
            .pipe($.sass({
                errLogToConsole: true,
                sourceComments: 'normal',
                sourceMap: isProduction ? false : true
            }))
            .pipe($.autoprefixer(config.autoprefixer.browser))
            .pipe($.if(isProduction,$.csso()))
            .pipe(gulp.dest(config.path.style.dest))
            .pipe($.browser.reload({stream: true}));
    });
}();