var gulp = require('gulp');
var rewrite = require('connect-modrewrite');

module.exports = function () {
    gulp.task('server',function() {
        return $.browser({
            server: {
                baseDir: config.dist,
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
