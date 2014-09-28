var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins,
    _extend = require('extend');

module.exports = function () {
    gulp.task('sprite',function() {
        return gulp.src(frontplate.getPath('sprite'))
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.foreach(function(stream, file){
                if(file.isDirectory()) {
                    var name = file.path.substring(file.path.lastIndexOf('/')+1);
                    if (!name) return stream;

                    var options = _extend({
                        imgName: name + config.sprite.imgExtension,
                        cssName: '_' + name + config.sprite.cssExtension,
                        imgPath: config.path.sprite.imgPath + '/' + name + config.sprite.imgExtension,
                        cssOpts: {
                            prefix: name
                        }
                    },config.sprite.options);
                    var strm = gulp.src(file.path + '/*' + config.sprite.extension)
                        .pipe($.plumber())
                        .pipe($.spritesmith(options));
                    strm.img.pipe(gulp.dest(frontplate.getPath('sprite','imgDest')));
                    strm.css.pipe(gulp.dest(frontplate.getPath('sprite','cssDest')));
                    return strm;
                }
                return stream;
            }))
            .pipe($.browser.reload({stream: true}));
    });
}();