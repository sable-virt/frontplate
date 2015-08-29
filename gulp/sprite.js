/**
 * スプライト生成タスク
 * スプライト画像とCSSを生成するタスク
 */
import gulp from 'gulp';
import _ from 'lodash';
import path from 'path';
import ms from 'merge-stream';
import fs from 'fs';
import ejs from 'ejs';
const config = global.config;

gulp.task('sprite', () => {
    let op = _.extend({}, __CONFIG.sprite.options);
    let template = op.cssTemplate;
    if (typeof template === 'string' && path.extname(template) === '.ejs') {
        let file = fs.readFileSync(`${process.cwd()}/${template}`);
        op.cssTemplate = (data) => {
            return ejs.render(file.toString(), data);
        };
    }
    return gulp.src(__CONFIG.path.sprite.src)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.foreach((stream, file) => {
            if (file.isDirectory()) {
                let paths = file.path.split(path.sep);
                let name = paths.pop();
                if (!name) return stream;
                let isRetina = name.search(/-2x$/) !== -1;
                let options = _.merge({
                    cssSpritesheetName: name,
                    imgName: `${name}${__CONFIG.sprite.imgExtension}`,
                    cssName: `_${name}${__CONFIG.sprite.cssExtension}`,
                    imgPath: `${__CONFIG.path.sprite.imagePath}/${name}${__CONFIG.sprite.imgExtension}`,
                    cssOpts: {
                        scale: isRetina ? .5 : 1,
                        prefix: name,
                        functions: true
                    }
                }, op);
                let strm = gulp.src(`${file.path}/*${__CONFIG.sprite.extension}`)
                    .pipe($.plumber())
                    .pipe($.spritesmith(options));
                strm.img.pipe(gulp.dest(__CONFIG.path.sprite.imageDest));
                strm.css.pipe(gulp.dest(__CONFIG.path.sprite.cssDest));
                return ms(stream, strm);
            }
            return stream;
        }));
});
