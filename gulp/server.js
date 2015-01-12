var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

var rewrite = require('connect-modrewrite');

module.exports = function () {
    gulp.task('server',function() {
        return $.browser.init(frontplate.BASE_PATH, {
            server: {
                baseDir: config.appPath + '/public/' + frontplate.option.d,
                directory: false,
                middleware: [
                    rewrite([
                        '^[^\\.]*$ /index.html [L]'
                    ])
                ]
            },
            notify: false,
            ghostMode: {
                clicks: false,
                location: false,
                forms: false,
                scroll: false
            }
        });
    });
    gulp.task('reload',function() {
        $.browser.reload();
    });
}();

