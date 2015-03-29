
var gulp = require('gulp'),
    config = require('./config');
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

var runSequence = require('run-sequence');
$.browser = require('browser-sync');

var DIR = getType(process.argv);

function getType(args) {
  var result = {};
  for (var i = 0, len = args.length; i < len; i++) {
    if (args[i].charAt(0) === '-') {
      return args[i].replace(/^-/,'');
    }
  }
  return config.defaultPath;
}

// globalに共通変数書き出し
global.$ = $;
global.config = config;

function buildPath(data) {
  for (var key in data) {
    var val = data[key];
    if (typeof val === 'string') {
      data[key] = val.replace(/%type%/g,DIR);
    } else {
      data[key] = buildPath(val);
    }
  }
  return data;
}

buildPath(config.path);

gulp.task('watch', function() {
    gulp.watch(config.path.ejs.watch, ['ejs']);
    gulp.watch(config.path.html.src, ['html']);
    gulp.watch(config.path.style.src, ['style']);
    gulp.watch(config.path.sprite.watch, ['sprite','style','copy']);
    gulp.watch(config.path.images, ['copy']);
});

// gulpディレクトリのタスク読み込み
var tasks = require('./gulp/load');
gulp.task('build',['clean'], function(callback) {
    return runSequence('sprite',['ejs','script','style','copy'], callback);
});
gulp.task('default',['server','watch','watchScript','testWatch'], function() {});
