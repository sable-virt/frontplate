var gulp = require('gulp');

function karmaTest(watch) {
    return gulp.src(__CONFIG.path.test.src)
        .pipe($.karma({
            configFile: 'karma.conf.js',
            action: watch ? 'watch' : 'run'
        }));
}

gulp.task('test', function() {
    return karmaTest();
});
gulp.task('watchTest', function() {
    return karmaTest(true);
});