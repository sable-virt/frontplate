var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

function karmaTest(watch) {
    return gulp.src(frontplate.getPath('test'))
        .pipe($.karma({
            configFile: 'karma.conf.js',
            action: watch ? 'watch' : 'run'
        }));
}

gulp.task('test', function() {
    return karmaTest();
});
gulp.task('testWatch', function() {
    return karmaTest(true);
});