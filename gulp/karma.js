var gulp = require('gulp');

function karmaTest(watch) {
    return gulp.src(config.path.test.src)
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