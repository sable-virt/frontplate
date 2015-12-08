/**
 * スタイルタスク
 * SCSSをコンパイルしてAutoprefixerをかける。プロダクションリリース時には圧縮する
 */
var gulp = require('gulp');
var _ = require('lodash');
var config = require('./config');
var $ = require('./plugins');

var autoprefixer = require('autoprefixer');
var cssMqpacker = require('css-mqpacker');

gulp.task('style', function() {
    config.style = config.style || {};
    var guideOptions = _.merge({
        out: './guide/'
    }, config.styleguide);
    var sourcemaps = config.style.sourcemaps || './maps';

    return gulp.src(config.path.style.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.frontnote(guideOptions))
        .pipe($.sassLint())
        .pipe($.sassLint.format())
        .pipe($.sassLint.failOnError())
        .pipe($.if(!config.IS_PRODUCTION, $.sourcemaps.init()))
        .pipe($.sass())
        .pipe($.postcss([
            autoprefixer(config.style.autoprefixer),
            cssMqpacker(config.style.mqpacker)
        ]))
        .pipe($.minifyCss(config.style.minify))
        .pipe($.if(!config.IS_PRODUCTION, $.sourcemaps.write(sourcemaps)))
        .pipe(gulp.dest(config.path.style.dest))
        .pipe($.browser.stream({match: "**/*.css"}));
});