var gulp = require('gulp');

module.exports = function () {
    gulp.task('ejs', function () {
        return gulp.src(__CONFIG.path.ejs.src)
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.ejs(__CONFIG.ejs))
            .pipe(gulp.dest(__CONFIG.path.ejs.dest))
            .pipe($.browser.reload({stream: true}));
    });
}();