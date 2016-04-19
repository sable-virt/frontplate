'use strict';
/**
 * スタイルタスク
 * SCSSをコンパイルしてAutoprefixerをかける。プロダクションリリース時には圧縮する
 */
let gulp = require('gulp');
let merge = require('merge');
let config = require('./config');
let $ = require('./plugins');

let autoprefixer = require('autoprefixer');
let cssMqpacker = require('css-mqpacker');

gulp.task('style', () => {
    config.style = config.style || {};
    let sourcemaps = config.style.sourcemaps || './maps';

    return gulp.src(config.path.style.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.sassLint())
        .pipe($.sassLint.format())
        .pipe($.sassLint.failOnError())
        .pipe($.if(!config.IS_PRODUCTION, $.sourcemaps.init()))
        .pipe($.sass(config.style.sass))
        .pipe($.postcss([
            autoprefixer(config.style.autoprefixer),
            cssMqpacker(config.style.mqpacker)
        ]))
        .pipe($.if(!config.IS_PRODUCTION, $.sourcemaps.write(sourcemaps)))
        .pipe(gulp.dest(config.path.style.dest))
        .pipe($.browser.stream({match: "**/*.css"}));
});