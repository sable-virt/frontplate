var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

module.exports = function () {
    gulp.task('style', function() {
        return gulp.src(frontplate.getPath('sass'))
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.frontnote({
                out: config.appPath + '/guide' + '/' + frontplate.option.d ,
                css: (config.styleguide && config.styleguide.css) ? frontplate.path(config.styleguide.css,true) : null,
                script: (config.styleguide && config.styleguide.script) ? frontplate.path(config.styleguide.script,true) : null
            }))
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