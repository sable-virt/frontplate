var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

module.exports = function () {
    gulp.task('server',function() {
        return $.browser.init(frontplate.BASE_PATH, {
            server: {
                baseDir: frontplate.BASE_PATH,
                notify: false,
                directory: true
            }
        });
    });
}();

