var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins,
    conf = require('../webpack.config.js'),
    through = require('through2'),
    path = require('path');

function exeWebPack(conf,watch) {
    if(watch === true) {
        conf.watch = true;
    } else {
        conf.watch = false;
    }
    var filter = $.filter('**/*.js');
    return gulp.src(frontplate.getPath('js'))
        .pipe(through.obj(function(file,charset,callback) {
            conf.entry = conf.entry || {};
            conf.entry[path.basename(file.path,path.extname(file.path))] = file.path;
            this.push(file);
            callback();
        }))
        .pipe($.webpack(conf))
        .pipe(filter)
        .pipe($.if(frontplate.MINIFY && config.useAngular, $.ngAnnotate()))
        .pipe($.if(frontplate.MINIFY, $.uglify()))
        .pipe(filter.restore())
        .pipe(gulp.dest(frontplate.getPath('js','dest')))
        .pipe($.browser.reload({stream: true}));
}
gulp.task('script', function() {
    return exeWebPack(conf);
});
gulp.task('watchScript', function() {
    return exeWebPack(conf,true);
});
