/**
 * タスク設定ファイル
 */
module.exports = {
    dist: 'public/%type%',
    defaultPath: 'pc',
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
            padding: 5,
            cssOpts: {
                functions: false
            }
        }
    },
    server: {
        ghostMode: {
            clicks: false,
            location: false,
            forms: false,
            scroll: false
        }
    },
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
            src: 'public/%type%/**/*.html'
        },
        style: {
            src: 'src/%type%/sass/*.scss',
            dest: 'public/%type%/css'
        },
        // EJS
        ejs: {
            src: ['src/%type%/**/*.ejs','!src/%type%/**/_*.ejs'],
            watch: ['src/%type%/**/*.ejs'],
            dest: 'public/%type%'
        },
        // SpriteSmith
        sprite: {
            src: 'src/%type%/**/sprites/*',
            watch: 'src/%type%/**/sprites/**/*',
            imagePath: '../images',
            imageDest: 'src/%type%/images',
            cssDest: 'src/%type%/sass/sprites'
        },
        // JS Hint
        js: {
            src: ['src/%type%/js/*.js','!src/js/_*.js','src/%type%/js/*.ts','!src/js/_*.ts'],
            dest: 'public/%type%/js'
        },
        test: {
            src: [
                'public/%type%/js/*.js',
                'node_modules/power-assert/build/power-assert.js',
                'node_modules/sinon/pkg/sinon.js',
                'src/%type%/test/**/*.js'
            ]
        },
        copy: [
            {
                from: 'src/%type%/lib/**/*',
                to: 'public/%type%/lib'
            },
            {
                from: 'src/%type%/images/**/*',
                to: 'public/%type%'
            }
        ]
    }
};
