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
var cssnano = require('cssnano');

gulp.task('style', function() {
    var guideOptions = _.merge({
        out: './guide/'
    }, config.styleguide);

    var postCSSPlugins = [
        autoprefixer(config.style.autoprefixer),
        cssMqpacker(config.style.mqpacker)
    ];
    if (config.css && config.css.optimisation && config.css.optimisation !== 'none') {
        if (config.css.optimisation === 'always' || config.IS_PRODUCTION) {
            postCSSPlugins.push(cssnano(_.merge(config.style.cssnano,{
                autoprefixer: false
            })));
        }
    }
    return gulp.src(config.path.style.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.frontnote(guideOptions))
        .pipe($.if(!config.IS_PRODUCTION, $.sourcemaps.init()))
        .pipe($.sass(_.merge({
            outputStyle: 'compressed'
        },config.style.sass)))
        .pipe($.postcss(postCSSPlugins))
        .pipe($.if(!config.IS_PRODUCTION, $.sourcemaps.write('./maps')))
        .pipe(gulp.dest(config.path.style.dest))
        .pipe($.browser.stream({match: "**/*.css"}));
});