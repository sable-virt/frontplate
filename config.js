/**
 * タスク設定ファイル
 */

var fs = require("fs");
module.exports = {
    public: 'public',
    // AutoPrefixer
    autoprefixer: {
        browser: ['last 3 version', 'ie >= 9', 'Android 4.0']
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
    rewrite: [
        '^[^\\.]*$ /index.html [L]'
    ],
    // FrontNote
    styleguide: {
        // 読み込むCSSのパス
        css: '../../public/css/style.css',
        // 読み込むJSのパス
        script: '../../public/js/app.js'
    },
    // パス設定
    path: {
        // html
        html: {
            src: 'public/**/*.html'
        },
        style: {
            src: 'src/sass/**/*.scss',
            dest: 'public/css'
        },
        // EJS
        ejs: {
            src: ['src/**/*.ejs','!src/**/_*.ejs'],
            watch: ['src/**/*.ejs'],
            dest: 'public/'
        },
        // SpriteSmith
        sprite: {
            src: 'src/sprites/*',
            watch: 'src/sprites/**/*',
            imgPath: '../images',
            image: 'src/images',
            css: 'src/sass/sprites',
        },
        // JS Hint
        js: {
            src: ['src/js/*.ts','!src/js/_*.ts'],
            dest: 'public/js'
        },
        // Image min
        images: {
            src: 'src/images/**/*',
            dest: 'public/images'
        },
        test: {
            src: [
                'public/js/common.js',
                //'../bower_components/angular-mocks/angular-mocks.js',
                'public/js/app.js',
                'test/**/*.js'
            ]
        },
        copy: [
            {
                from: 'src/lib/**/*',
                to: 'public/lib'
            },
            {
                from: 'src/images/**/*',
                to: 'public/images'
            }
        ]
    }
};