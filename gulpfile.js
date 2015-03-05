var gulp = require('gulp'),
    config = require('./config');
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

var runSequence = require('run-sequence');
var extend = require('extend');
$.browser = require('browser-sync');

var DEFAULT_OPTIONS = {
    min: false,
    d: config.defaultDir || ''
};
var APP_PATH = config.appPath;
var OPTIONS = parseOption(process.argv);
function parseOption(argv) {
    var options = extend({},DEFAULT_OPTIONS);
    for(var i = 0, len = argv.length; i < len; i++) {
        if (argv[i].charAt(0) === '-') {
            var match = argv[i].substring(1).split('=');
            var key = match[0];
            var value = match[1] || true;
            options[key] = value;
        }
    }
    return options;
}


/**
 * パス生成関数
 * @param name
 * @param prop
 * @returns {string}
 */
function getPath(name, prop) {
    prop = prop || 'src';
    if (!config.path[name] || !config.path[name][prop]) {
        return console.log('[ERROR] not found path - ' + name + '.' + prop);
    }
    return generatePath(config.path[name][prop]);
}
function generatePath(path,relative) {
    var appPath = relative ? '.' : APP_PATH;
    if (typeof path === 'object') {
        return path.map(function (val) {
            if (val.charAt(0) === '!') {
                return '!' + appPath + '/' + replaceTypeTag(val.substring(1));
            }
            return appPath + '/' + replaceTypeTag(val);
        });
    } else {
        path = path || '';
        return appPath + '/' + replaceTypeTag(path);
    }
}
function replaceTypeTag(val) {
    if (OPTIONS.d) {
        return val.replace(/%type%/g, OPTIONS.d);
    }
    return val.replace(/\/%type%/g, '');
}

// globalに共通変数書き出し
global.frontplate = {
    plugins: $,
    config: config,
    getPath: getPath,
    path: generatePath,
    option: OPTIONS
};

gulp.task('watch', function() {
    gulp.watch(getPath('ejs','watch'), ['ejs']);
    gulp.watch(getPath('html'), ['html']);
    gulp.watch(getPath('sass'), ['style']);
    gulp.watch(getPath('sprite','watch'), ['sprite','style','imagemin']);
    gulp.watch(getPath('images'), ['imagemin']);
});

// gulpディレクトリのタスク読み込み
var tasks = require('./gulp/load');
gulp.task('build',['clean'], function(callback) {
    return runSequence(['copy','ejs','sprite','style', 'script'], 'imagemin', callback);
});
gulp.task('default',['server','watch','watchScript','testWatch'], function() {});