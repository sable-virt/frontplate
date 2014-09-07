var BASE_PATH = process.argv.indexOf('-sp') === -1 ? 'pc' : 'sp';
var MINIFY = process.argv.indexOf('-min') === -1 ? false : true;

var gulp = require('gulp'),
    config = require('./frontplate');
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

$.browser = require('browser-sync');

// globalに共通変数書き出し
global.frontplate = {
    plugins: $,
    config: config,
    BASE_PATH: BASE_PATH,
    MINIFY: MINIFY
};

// gulpディレクトリのタスク読み込み
var tasks = require('./gulp/load');

/**
 * パス生成関数
 * @param name
 * @param prop
 * @returns {*}
 */
function getPath(name,prop) {
    prop = prop || 'src';
    var path = config.path[name][prop];
    if (typeof path === 'object') {
        return path.map(function(val) {
            if (val.charAt(0) === '!') {
                return '!' + BASE_PATH + '/' + val.substring(1);
            }
            return BASE_PATH + '/' + val;
        })
    } else {
        path = path || '';
        return BASE_PATH + '/' + path;
    }
}

// style
gulp.task('style',function() {
    return tasks.sass(getPath('sass'))
        .pipe(gulp.dest(getPath('sass','dest')))
        .pipe($.browser.reload({stream: true}));
});

// html lint
gulp.task('htmllint',function() {
    return tasks.htmllint(getPath('html'));
});

// html lint
gulp.task('ejs',function() {
    return tasks.ejs(getPath('ejs'))
        .pipe(gulp.dest(getPath('ejs','dest')))
        .pipe($.browser.reload({stream: true}));
});

// server
gulp.task('serv',['browserify','ejs','style'],function() {
    return tasks.server(BASE_PATH);
});

// sprite
gulp.task('sprite',function() {
    return tasks.sprite(getPath('sprite'),getPath('sprite','imgDest'),getPath('sprite','cssDest'))
        .pipe($.browser.reload({stream: true}));
});

// jshint
gulp.task('jshint',function() {
    return tasks.jshint(getPath('js'));
});

// imagemin
gulp.task('imagemin',function() {
    return tasks.imagemin(getPath('images'))
        .pipe(gulp.dest(getPath('images','dest')))
        .pipe($.browser.reload({stream: true}));
});

// js
gulp.task('browserify',function() {
    return tasks.browserify(getPath('js'))
        .pipe(gulp.dest(getPath('js','dest')))
        .pipe($.browser.reload({stream: true}));
});

gulp.task('default',['serv'], function() {
    gulp.watch(getPath('js'), ['jshint','browserify']);
    gulp.watch(getPath('ejs','watch'), ['ejs']);
    gulp.watch(getPath('sass'), ['style']);
    gulp.watch(getPath('html'), ['htmllint']);
    gulp.watch(getPath('sprite','watch'), ['sprite']);
});