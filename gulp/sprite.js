var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins,
    _extend = require('util')._extend;

module.exports = function (src, imgPath, cssPath) {
    return gulp.src(src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.foreach(function(stream, file){
            if(file.isDirectory()) {
                var name = file.path.substring(file.path.lastIndexOf('/')+1);
                if (!name) return stream;

                var options = _extend({
                    imgName: name + config.sprite.imgExtension,
                    cssName: '_' + name + config.sprite.cssExtension,
                    imgPath: '../images/sprites/' + name + config.sprite.imgExtension,
                    cssOpts: {
                        prefix: name
                    }
                },config.sprite.options);
                var strm = gulp.src(file.path + '/*' + config.sprite.extension)
                    .pipe($.plumber())
                    .pipe($.spritesmith(options));
                strm.img.pipe(gulp.dest(imgPath));
                strm.css.pipe(gulp.dest(cssPath));
                return strm;
            }
            return stream;
        }));
};




