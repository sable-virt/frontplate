var gulp = require('gulp'),
    extend = require('extend'),
    path = require('path'),
    ms = require('merge-stream'),
    config = global.config;

module.exports = function () {
    gulp.task('sprite',function() {
        return gulp.src(__CONFIG.path.sprite.src)
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.foreach(function(stream, file){
                if(file.isDirectory()) {
                    var paths = file.path.split(path.sep);
                    var name = paths.pop();
                    if (!name) return stream;
                    var options = extend({
                        imgName: name + __CONFIG.sprite.imgExtension,
                        cssName: '_' + name + __CONFIG.sprite.cssExtension,
                        imgPath: __CONFIG.path.sprite.image + '/' + name + __CONFIG.sprite.imgExtension,
                        cssOpts: {
                            prefix: name
                        }
                    },__CONFIG.sprite.options);
                    var strm = gulp.src(file.path + '/*' + __CONFIG.sprite.extension)
                        .pipe($.plumber())
                        .pipe($.spritesmith(options));
                    strm.img.pipe(gulp.dest(__CONFIG.path.sprite.image));
                    strm.css.pipe(gulp.dest(__CONFIG.path.sprite.css));
                    return ms(stream,strm);
                }
                return stream;
            }));
    });
}();
