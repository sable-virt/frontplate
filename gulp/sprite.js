var gulp = require('gulp'),
    extend = require('extend'),
    path = require('path'),
    ms = require('merge-stream');

module.exports = function () {
    gulp.task('sprite',function() {
        return gulp.src(config.path.sprite.src)
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.foreach(function(stream, file){
                if(file.isDirectory()) {
                    var paths = file.path.split(path.sep);
                    var name = paths.pop();
                    if (!name) return stream;
                    var options = extend({
                        imgName: name + config.sprite.imgExtension,
                        cssName: '_' + name + config.sprite.cssExtension,
                        imgPath: config.path.sprite.imgPath + '/' + name + config.sprite.imgExtension,
                        cssOpts: {
                            prefix: name
                        }
                    },config.sprite.options);
                    var cssPath = path.resolve(file.path,config.path.sprite.css);
                    var imagePath = path.resolve(file.path,config.path.sprite.image);
                    var strm = gulp.src(file.path + '/*' + config.sprite.extension)
                        .pipe($.plumber())
                        .pipe($.spritesmith(options));
                    strm.img.pipe(gulp.dest(imagePath));
                    strm.css.pipe(gulp.dest(cssPath));
                    return ms(stream,strm);
                }
                return stream;
            }))
            .pipe($.browser.reload({stream: true}));
    });
}();
