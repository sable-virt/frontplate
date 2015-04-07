var gulp = require('gulp'),
    del = require('del');

gulp.task('clean', function (callback) {
    del(__CONFIG.dist,callback);
});