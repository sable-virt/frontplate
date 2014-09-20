var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

var browserify = require('browserify'),
    html2js = require('html2js-browserify'),
    debowerify = require('debowerify'),wsa
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    through = require('through2'),
    buffer = require('vinyl-buffer'),
    path = require('path');

// Transformはここに登録
var TRANSFORMS = [debowerify,html2js];

module.exports = function () {
    /**
     * 出力時に行う共通処理
     * @param stream
     * @returns {*}
     */
    function destFile(stream) {
        return stream.pipe($.if(config.useAngular, $.ngAnnotate()))
            .pipe($.if(frontplate.MINIFY, $.uglify()))
            .pipe(gulp.dest(frontplate.getPath('js', 'dest')))
            .pipe($.browser.reload({stream: true}));
    }
    function browserified(watch) {
        var browserifer = function () {
            return through.obj(function(file,enc,callback) {
                var filepath = file.path,
                    bundler,
                    filename = path.basename(filepath);
                var br = browserify(watchify.args);
                if (watch) {
                    bundler = watchify(br);
                    bundler.on('update', function (ids) {
                        console.log('\u001b[32m[UPDATE] \u001b[30m' + filename);
                        var stream = bundler.bundle()
                            .pipe(source(filename))
                            .pipe(buffer());
                        return destFile(stream);
                    });
                } else {
                    bundler = br;
                }
                TRANSFORMS.forEach(function(transform) {
                    bundler.transform(transform);
                });
                bundler.add(filepath);
                file.contents = bundler.bundle();
                //this.push(file);
                callback();
            });
        };
        var stream = gulp.src(frontplate.getPath('js'))
            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
            .pipe(browserifer());
        return destFile(stream);
    }

    gulp.task('script', function () {
        return browserified(false);
    });

    gulp.task('watchify', function () {
        return browserified(true);
    });
}();


