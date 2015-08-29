/**
 * サーバー起動タスク
 */
import gulp from 'gulp';
import _ from 'lodash';
import rewrite from 'connect-modrewrite';

gulp.task('server', () => {
    let options = _.merge(__CONFIG.server, {
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
gulp.task('reload', () => {
    $.browser.reload();
});
