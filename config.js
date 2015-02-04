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
        css: '../../public/%type%/css/style.css',
        // 読み込むJSのパス
        script: '../../public/%type%/js/app.js'
    },
    // パス設定
    path: {
        // html
        html: {
            src: 'public/%type%/**/*.html'
        },
        // SASS
        sass: {
            src: 'source/%type%/sass/**/*.scss',
            dest: 'public/%type%/css'
        },
        // EJS
        ejs: {
            src: ['source/%type%/**/*.ejs','!source/%type%/**/_*.ejs'],
            watch: ['source/%type%/**/*.ejs'],
            dest: 'public/%type%/'
        },
        // SpriteSmith
        sprite: {
            src: 'source/%type%/sprites/*',
            watch: 'source/%type%/sprites/**/*',
            imgDest: 'source/%type%/images',
            cssDest: 'source/%type%/sass/sprites',
            imgPath: '../images'
        },
        // JS Hint
        js: {
            src: ['source/%type%/js/*.js','!source/%type%/js/_*.js'],
            dest: 'public/%type%/js'
        },
        // Image min
        images: {
            src: 'source/%type%/images/**/*',
            dest: 'public/%type%/images'
        },
        test: {
            src: [
                'public/%type%/js/common.js',
                //'../bower_components/angular-mocks/angular-mocks.js',
                'public/%type%/js/app.js',
                'source/%type%/**/*Spec.js'
            ]
        },
        copy: [
            {
                from: 'source/%type%/lib/**/*',
                to: 'public/%type%/lib'
            }
        ]
    }
};