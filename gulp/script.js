var gulp = require('gulp'),
    through = require('through2'),
    path = require('path');

function exeWebPack(watch) {
    var conf = require('../webpack.config.js');
    if(watch === true) {
        conf.watch = true;
    } else {
        conf.watch = false;
    }
    return gulp.src(config.path.js.src)
        .pipe(through.obj(function(file,charset,callback) {
            conf.entry = conf.entry || {};
            conf.entry[path.basename(file.path,path.extname(file.path))] = file.path;
            this.push(file);
            callback();
        }))
        .pipe($.webpack(conf))
        .pipe(gulp.dest(config.path.js.dest))
        .pipe($.browser.reload({stream: true}));
}
gulp.task('script', function() {
    return exeWebPack();
});
gulp.task('watchScript', function() {
    return exeWebPack(true);
});
