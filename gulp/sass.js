var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

module.exports = function (src) {
    var stream = gulp.src(src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.frontnote({
            out: frontplate.BASE_PATH + '/styleguide',
            css: (config.styleguide && config.styleguide.css) ? config.styleguide.css : null,
            script: (config.styleguide && config.styleguide.script) ? config.styleguide.script : null
        }))
        .pipe($.sass({
            errLogToConsole: true,
            sourceComments: 'normal',
            sourceMap: true
        }))
        .pipe($.autoprefixer(config.autoprefixer.browser));
    if (frontplate.MINIFY) {
        stream.pipe($.csso());
    }
    return stream;
};