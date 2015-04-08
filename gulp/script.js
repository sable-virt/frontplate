var gulp = require('gulp'),
    through = require('through2'),
    path = require('path'),
    webpack = require('webpack');

function exeWebPack(watch) {
    var conf = Object.create(require('../webpack.config.js'));
    conf.watch = watch;
    if(global.__IS_PRODUCTION) {
        delete conf.devtool;
        conf.plugins = conf.plugins || [];
        conf.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }));
    }
    return gulp.src(__CONFIG.path.js.src)
        .pipe(through.obj(function(file,charset,callback) {
            conf.entry = conf.entry || {};
            var fileName = path.basename(file.path).replace(/\.(ts|js)$/,'');
            conf.entry[fileName] = file.path;
            this.push(file);
            callback();
        }))
        .pipe($.webpack(conf))
        .pipe(gulp.dest(__CONFIG.path.js.dest))
        .pipe($.browser.reload({stream: true}));
}
gulp.task('script', function() {
    return exeWebPack(false);
});
gulp.task('watchScript', function() {
    return exeWebPack(true);
});
