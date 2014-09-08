/**
 * タスク設定ファイル
 */
module.exports = {
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
            cssTemplate: 'sprite-template.mustache',
            algorithm: 'binary-tree',
            padding: 5
        }
    },
    // FrontNote
    styleguide: {
        // 読み込むCSSのパス
        css: '../assets/css/style.css',
        // 読み込むJSのパス
        script: '../assets/js/main.js'
    },
    // パス設定
    path: {
        // SASS
        sass: {
            src: 'source/sass/**/*.scss',
            dest: 'assets/css'
        },
        // HTML Lint
        html: {
            src: ['**/*.html','!styleguide/**/*.html']
        },
        // EJS
        ejs: {
            src: ['source/**/*.ejs','!source/**/_*.ejs'],
            watch: ['source/**/*.ejs'],
            dest: './'
        },
        // SpriteSmith
        sprite: {
            src: 'source/images/sprites/*',
            watch: 'source/images/sprites/*/*',
            imgDest: 'assets/images',
            cssDest: 'source/sass/sprites'
        },
        // JS Hint
        js: {
            src: ['source/js/**/*.js','!source/js/**/_*.js'],
            dest: 'assets/js'
        },
        // Image min
        images: {
            src: 'assets/images/**/*',
            dest: 'assets/images'
        }
    }
};