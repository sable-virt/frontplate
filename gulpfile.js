var gulp = require('gulp'),
    config = require('./frontplate');
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

$.browser = require('browser-sync');

var BASE_TYPE;
var BASE_PATH;
var MINIFY;

if (config.flatten) {
    BASE_TYPE = '';
    BASE_PATH = config.APP_PATH;
} else {
    BASE_TYPE = process.argv.indexOf('-sp') === -1 ? 'pc' : 'sp';
    BASE_PATH = config.APP_PATH + '/' + BASE_TYPE;
}
if (config.debug) {
    MINIFY = process.argv.indexOf('-min') === -1 ? false : true;
} else {
    MINIFY = true;
}

/**
 * パス生成関数
 * @param name
 * @param prop
 * @returns {string}
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

// globalに共通変数書き出し
global.frontplate = {
    plugins: $,
    config: config,
    getPath: getPath,
    BASE_TYPE: BASE_TYPE,
    BASE_PATH: BASE_PATH,
    MINIFY: MINIFY
};

gulp.task('watch', function() {
    gulp.watch(getPath('js'), ['jshint']);
    gulp.watch(getPath('ejs','watch'), ['ejs']);
    gulp.watch(getPath('iconfont'), ['iconfont','style']);
    gulp.watch(getPath('sass'), ['style']);
    gulp.watch(getPath('html'), ['htmllint']);
    gulp.watch(getPath('sprite','watch'), ['sprite']);
});

// gulpディレクトリのタスク読み込み
var tasks = require('./gulp/load');
gulp.task('default',['script','style','server','watch','watchScript'], function() {});
