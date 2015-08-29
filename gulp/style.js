/**
 * スタイルタスク
 * SCSSをコンパイルしてAutoprefixerをかける。プロダクションリリース時には圧縮する
 */
import gulp from 'gulp';
import _ from 'lodash';
import config from './config';
import $ from './plugins';

import autoprefixer from 'autoprefixer';
import cssMqpacker  from 'css-mqpacker';
import cssnano from 'cssnano';

gulp.task('style', () => {
    var guideOptions = _.merge({
        out: './guide/'
    }, config.styleguide);
    return gulp.src(config.path.style.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.frontnote(guideOptions))
        .pipe($.if(!config.IS_PRODUCTION, $.sourcemaps.init()))
        .pipe($.sass())
        .pipe($.postcss([
            autoprefixer(config.style.autoprefixer),
            cssMqpacker(config.style.mqpacker),
            cssnano(config.style.cssnano)
        ]))
        .pipe($.if(!config.IS_PRODUCTION, $.sourcemaps.write('./maps')))
        .pipe(gulp.dest(config.path.style.dest))
        .pipe($.browser.stream());
});