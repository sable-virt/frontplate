/**
 * スタイルタスク
 * SCSSをコンパイルしてAutoprefixerをかける。プロダクションリリース時には圧縮する
 */
import gulp from 'gulp';
import _ from 'lodash';

import autoprefixer from 'autoprefixer';
import cssMqpacker  from 'css-mqpacker';
import cssnano from 'cssnano';

gulp.task('style', () => {
    var guideOptions = _.merge({
        out: './guide/'
    }, __CONFIG.styleguide);
    return gulp.src(__CONFIG.path.style.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.frontnote(guideOptions))
        .pipe($.if(!__IS_PRODUCTION, $.sourcemaps.init()))
        .pipe($.sass())
        .pipe($.postcss([
            autoprefixer(__CONFIG.style.autoprefixer),
            cssMqpacker(__CONFIG.style.mqpacker),
            cssnano(__CONFIG.style.cssnano)
        ]))
        .pipe($.if(!__IS_PRODUCTION, $.sourcemaps.write('./maps')))
        .pipe(gulp.dest(__CONFIG.path.style.dest))
        .pipe($.browser.stream());
});