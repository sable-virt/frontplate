'use strict';
/**
 * スタイルガイドタスク
 * スタイルガイドをfrontnoteで生成する
 */
let gulp = require('gulp');
let _ = require('lodash');
let config = require('./config');
let $ = require('./plugins');

gulp.task('styleguide', () => {
    config.style = config.style || {};
    let guideOptions = _.merge({
        out: './guide/'
    }, config.styleguide);
    return gulp.src(config.path.style.watch)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.frontnote(guideOptions));
});