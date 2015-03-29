var gulp = require('gulp'),
    through = require('through2'),
    path = require('path');

var webpack = require('webpack');
function exeWebPack(watch) {
    var conf = require('../webpack.config.js');
    conf.watch = watch;
    return gulp.src(config.path.js.src)
        .pipe(through.obj(function(file,charset,callback) {
            conf.entry = conf.entry || {};
            conf.entry[path.basename(file.path,'.ts')] = file.path;
            this.push(file);
            callback();
        }))
        .pipe($.webpack(conf))
        .pipe(gulp.dest(config.path.js.dest))
        .pipe($.browser.reload({stream: true}));
}
gulp.task('script', function() {
    return exeWebPack(false);
});
gulp.task('watchScript', function() {
    return exeWebPack(true);
});
