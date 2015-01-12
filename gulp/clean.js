var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins,
    del = require('del');

gulp.task('clean', function (callback) {
    del(frontplate.getPath('ejs','dest'),callback);
});