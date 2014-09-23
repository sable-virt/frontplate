var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

module.exports = function () {
    gulp.task('iconfont',function() {
        return gulp.src(frontplate.getPath('iconfont'))
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe($.iconfont({
                fontName: config.iconfont.fontName
            }))
            .on('codepoints', function(codepoints, options) {
                gulp.src(config.iconfont.template)
                    .pipe($.ejs({
                        className: config.iconfont.className,
                        classPrefix: config.iconfont.classPrefix,
                        glyphs: codepoints,
                        fontName: config.iconfont.fontName,
                        fontPath: config.iconfont.fontPath
                    },{ext: '.scss'}))
                    .pipe($.rename({
                        basename: config.iconfont.baseName
                    }))
                    .pipe(gulp.dest(frontplate.getPath('iconfont','css')));
            })
            .pipe(gulp.dest(frontplate.getPath('iconfont','dest')));
    });
}();

