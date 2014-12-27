/**
 * タスク設定ファイル
 */

var fs = require("fs");
module.exports = {
    appPath: 'app',
    defaultDir: 'pc',
    // AutoPrefixer
    autoprefixer: {
        browser: ['last 3 version', 'ie >= 8', 'Android 4.0']
    },
    // SpriteSmith
    sprite: {
        extension: '.png',
        imgExtension: '.png',
        cssExtension: '.scss',
        // SpriteSmithの設定
        options: {
            cssTemplate: './templates/sprite-template.mustache',
            algorithm: 'binary-tree',
            padding: 5
        }
    },
    // FrontNote
    styleguide: {
        // 読み込むCSSのパス
        css: '../../publish/%type%/css/style.css',
        // 読み込むJSのパス
        script: '../../publish/%type%/js/app.js'
    },
    // パス設定
    path: {
        // SASS
        sass: {
            src: 'source/%type%/sass/**/*.scss',
            dest: 'publish/%type%/css'
        },
        // EJS
        ejs: {
            src: ['source/%type%/**/*.ejs','!source/%type%/**/_*.ejs'],
            watch: ['source/%type%/**/*.ejs'],
            dest: 'publish/%type%/'
        },
        // SpriteSmith
        sprite: {
            src: 'source/%type%/sprites/*',
            watch: 'source/%type%/sprites/**/*',
            imgDest: 'source/%type%/images',
            cssDest: 'source/%type%/sass/sprites',
            imgPath: './images'
        },
        // JS Hint
        js: {
            src: ['source/%type%/js/*.js','!source/%type%/js/_*.js'],
            dest: 'publish/%type%/js'
        },
        // Image min
        images: {
            src: 'source/%type%/images/**/*',
            dest: 'publish/%type%/images'
        }
    }
};