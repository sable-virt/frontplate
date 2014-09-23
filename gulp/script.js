var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

var browserify = require('browserify');
watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    through = require('through2'),
    buffer = require('vinyl-buffer'),
    path = require('path');

module.exports = function () {
    /**
     * 出力時に行う共通処理
     * @param stream
     * @returns {*}
     */
    function destFile(stream) {
        return stream.pipe($.if(frontplate.MINIFY, $.unpathify()))
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
                var br = browserify({
                    cache: {},
                    packageCache: {},
                    fullPaths: false,
                    debug: config.debug,
                    paths: ['./node_modules','bower_components']
                });
                if (watch) {
                    bundler = watchify(br);
                    bundler.on('update', function (ids) {
                        var stream = bundler.bundle()
                            .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
                            .pipe(source(filename))
                            .pipe(buffer());
                        return destFile(stream);
                    });
                } else {
                    bundler = br;
                }
                bundler.add(filepath);

                var self = this;
                bundler.bundle(function(err,buf) {
                    file.contents = buf;
                    self.push(file);
                    callback();
                });
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