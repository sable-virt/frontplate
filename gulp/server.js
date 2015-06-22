/**
 * サーバー起動タスク
 */
var gulp = require('gulp');
var _ = require('lodash');
var rewrite = require('connect-modrewrite');

module.exports = function () {
    gulp.task('server',function() {
        var options = _.merge(__CONFIG.server,{
            server: {
                baseDir: __CONFIG.dist,
                directory: false,
                middleware: [
                    rewrite([
                        '^[^\\.]*$ /index.html [L]'
                    ])
                ]
            },
            notify: false
        });
        return $.browser(options);
    });
    gulp.task('reload',function() {
        $.browser.reload();
    });
}();
