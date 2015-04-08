var gulp = require('gulp');
var karma = require('karma').server;

gulp.task('test', function(callback) {
    karma.start({
        configFile: process.cwd() + '/karma.conf.js',
        singleRun: true
    },callback);
});
gulp.task('watchTest', function(callback) {
    karma.start({
        configFile: process.cwd() + '/karma.conf.js',
        singleRun: false,
        autoWatch: true
    },callback);
});