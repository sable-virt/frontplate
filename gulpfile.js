var gulp = require('gulp'),
    config = require('./config');
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

$.browser = require('browser-sync');

var DIRECTORIES = ['pc','sp','admin'];
var BASE_TYPE = getBaseType();
var BASE_PATH = getBasePath();
var MINIFY = process.argv.indexOf('-min') === -1 ? false : true;

function getBasePath() {
    var path = config.APP_PATH;
    if (!config.flatten) {
        path += '/' + BASE_TYPE;
    }
    return path;
}

function getBaseType() {
    var type = '';
    if (!config.flatten) {
        for (var i = 0, len = DIRECTORIES.length; i < len; i++) {
            if (process.argv.indexOf('-' + DIRECTORIES[i]) !== -1) {
                type = DIRECTORIES[i];
                break;
            }
        }
        if (!type) {
            type = DIRECTORIES[0];
        }
    }
    return type;
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