/**
 * スタイルタスク
 * SCSSをコンパイルしてAutoprefixerをかける。プロダクションリリース時には圧縮する
 */
var gulp = require('gulp');
var _ = require('lodash');

module.exports = function () {
    gulp.task('style', function () {
        var guideOptions = _.merge({
            out: './guide/'
        }, __CONFIG.styleguide);
        return gulp.src(__CONFIG.path.style.src)
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.frontnote(guideOptions))
            .pipe($.if(!__IS_PRODUCTION,$.sourcemaps.init()))
            .pipe($.sass())
            .pipe($.postcss([
                require('autoprefixer')(__CONFIG.style.autoprefixer),
                require('cssnano')(__CONFIG.style.cssnano)
            ]))
            .pipe($.if(!__IS_PRODUCTION,$.sourcemaps.write('./maps')))
            .pipe(gulp.dest(__CONFIG.path.style.dest))
            .pipe($.browser.stream());
    });
}();