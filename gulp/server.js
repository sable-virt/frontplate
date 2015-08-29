/**
 * サーバー起動タスク
 */
import gulp from 'gulp';
import _ from 'lodash';
import rewrite from 'connect-modrewrite';
import config from './config';
import $ from './plugins';

gulp.task('server', () => {
    let options = _.merge(config.server, {
        server: {
            baseDir: config.dist,
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
