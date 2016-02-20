'use strict';
/**
 * スプライト生成タスク
 * スプライト画像とCSSを生成するタスク
 */
let gulp = require('gulp');
let extend = require('extend');
let merge = require('merge');
let path = require('path');
let ms = require('merge-stream');
let fs = require('fs');
let ejs = require('ejs');
let config = require('./config');
let $ = require('./plugins');

const RETINA = /-2x$/;

gulp.task('sprite', () => {
    let op = extend({}, config.sprite.options);
    let template = op.cssTemplate;
    if (typeof template === 'string' && path.extname(template) === '.ejs') {
        let file = fs.readFileSync(`${process.cwd()}/${template}`);
        op.cssTemplate = function(data) {
            return ejs.render(file.toString(), data);
        };
    }
    return gulp.src(config.path.sprite.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.foreach(function(stream, file) {
            if (file.isDirectory()) {
                let paths = file.path.split(path.sep);
                let name = paths.pop();
                if (!name) return stream;
                let isRetina = name.search(RETINA) !== -1;
                let options = merge.recursive({
                    cssSpritesheetName: name,
                    imgName: `${name}${config.sprite.imgExtension}`,
                    cssName: `_${name}${config.sprite.cssExtension}`,
                    imgPath: `${config.path.sprite.imagePath}/${name}${config.sprite.imgExtension}`,
                    cssOpts: {
                        scale: isRetina ? .5 : 1,
                        prefix: name,
                        functions: true
                    }
                }, op);
                let strm = gulp.src(`${file.path}/*${config.sprite.extension}`)
                    .pipe($.plumber())
                    .pipe($.spritesmith(options));

                let imgStream = strm.img.pipe(gulp.dest(config.path.sprite.imageDest));
                let cssStream = strm.css.pipe(gulp.dest(config.path.sprite.cssDest));
                return ms(imgStream, cssStream);
            }
            return stream;
        }));
});
