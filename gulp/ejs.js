var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

module.exports = function () {
    gulp.task('ejs', function () {
        return gulp.src(frontplate.getPath('ejs'))
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.ejs(frontplate.config.ejs))
            .pipe(gulp.dest(frontplate.getPath('ejs','dest')))
            .pipe($.browser.reload({stream: true}));
    });
}();