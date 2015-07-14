/**
 * スタイルガイドタスク
 * 指定されたCSSが変更されたときに指定したディレクトリにスタイルガイドを出力する
 */
var gulp = require('gulp');

module.exports = function () {
    gulp.task('guide', function() {
        return gulp.src(__CONFIG.path.style.src)
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.frontnote(__CONFIG.styleguide))
            .pipe($.browser.stream());
    });
}();