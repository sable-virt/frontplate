var gulp = require('gulp');
var _ = require('lodash');

module.exports = function () {
    gulp.task('style', function() {
        var guideOptions = _.merge({
            out: './guide/'
        },__CONFIG.styleguide);
        return gulp.src(__CONFIG.path.style.src)
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.frontnote(guideOptions))
            .pipe($.sass({
                errLogToConsole: true,
                sourceComments: 'normal',
                sourceMap: __IS_PRODUCTION ? false : true
            }))
            .pipe($.autoprefixer(__CONFIG.autoprefixer.browser))
            .pipe($.if(__IS_PRODUCTION,$.minifyCss()))
            .pipe(gulp.dest(__CONFIG.path.style.dest))
            .pipe($.browser.stream());
    });
}();