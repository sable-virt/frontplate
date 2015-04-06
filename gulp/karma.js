var gulp = require('gulp');

function karmaTest(watch) {
    return gulp.src(config.path.test.src)
        .pipe($.karma({
            configFile: 'karma.conf.js',
            action: watch ? 'watch' : 'run',
            preprocessor: config.test.preprocessor,
            webpack: require('../webpack.config')
        }));
}

gulp.task('test', function() {
    return karmaTest();
});
gulp.task('testWatch', function() {
    return karmaTest(true);
});