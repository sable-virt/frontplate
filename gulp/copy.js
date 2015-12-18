'use strict';
/**
 * 複製タスク
 * 指定されたファイルを指定されたディレクトリに複製する
 */
let gulp = require('gulp');
let _ = require('lodash');
let ms = require('merge-stream');
let config = require('./config');
let $ = require('./plugins');

gulp.task('copy', () => {
    let files = config.path.copy;
    let stream = ms();
    _.forEach(files,(file) => {
        stream.add(gulp.src(file.from)
            .pipe(gulp.dest(file.to)));
    });
    stream.pipe($.browser.stream());
    return stream;
});