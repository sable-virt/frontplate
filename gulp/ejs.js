var gulp = require('gulp');

module.exports = function () {
    gulp.task('ejs', function () {
        return gulp.src(config.path.ejs.src)
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.ejs(config.ejs))
            .pipe(gulp.dest(config.path.ejs.dest))
            .pipe($.browser.reload({stream: true}));
    });
}();