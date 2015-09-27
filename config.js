/**
 * タスク設定ファイル
 */
module.exports = {
    // 出力先ディレクトリ
    dist: 'public/%type%',
    // gulpコマンドでデフォルトで監視するディレクトリ(src/*/)
    defaultPath: 'pc',
    // 変更監視時にユニットテストも行うかどうか
    autoTest: true,
    // AutoPrefixerの設定
    style: {
        cssnano: {
            autoprefixer: false
        },
        autoprefixer: {
            browser: ['last 3 version', 'ie >= 9', 'Android 4.0']
        }
    },
    htmlhint: '.htmlhintrc',
    // Sprite生成設定
    sprite: {
        // スプライトにする画像の拡張子
        extension: '.png',
        // 生成するスプライトの拡張子
        imgExtension: '.png',
        // 生成するcssファイルの拡張子
        cssExtension: '.scss',
        // 細かいオプション
        options: {
            // 生成するcssのテンプレート
            cssTemplate: './templates/sprite.ejs',
            // スプライト配置アルゴリズム
            algorithm: 'binary-tree',
            // スプライト画像の間隔
            padding: 5,
            // 出力cssの詳細オプション
            cssOpts: {
                // スプライト生成用のmixinは書き出さない
                functions: false
            }
        }
    },
    // サーバー設定
    server: {
        // サーバーの同期オプション
        ghostMode: {
            clicks: false,
            location: false,
            forms: false,
            scroll: false
        }
    },
    // スタイルガイド
    styleguide: {
        // スタイルガイドが出力された先から読み込むcssまでの相対パス
        css: '../../%type%/css/style.css',
        // スタイルガイドに追加したいJSファイルの相対パス
        script: '../../%type%/js/app.js',
        out: './public/styleguide/%type%/',
        clean: true
    },
    // パス設定
    path: {
        // HTML: html
        html: {
            src: 'public/%type%/**/*.html'
        },
        // スタイル関連: SASS,StyleGuide
        style: {
            src: 'src/%type%/sass/**/*.scss',
            dest: 'public/%type%/css'
        },
        // EJS: ejs
        ejs: {
            src: ['src/%type%/view/**/*.ejs','!src/%type%/view/**/_*.ejs'],
            watch: ['src/%type%/view/**/*.ejs'],
            dest: 'public/%type%'
        },
        // スプライト: スプライト画像生成
        sprite: {
            src: 'src/%type%/sprites/*',
            watch: 'src/%type%/sprites/**/*',
            imagePath: '../images',
            imageDest: 'src/%type%/images',
            cssDest: 'src/%type%/sass/sprites'
        },
        // スクリプト: script
        js: {
            src: ['src/%type%/js/*.js','!src/js/_*.js'],
            dest: 'public/%type%/js'
        },
        // テスト: karma
        test: {
            src: [
                'public/%type%/js/*.js',
                'node_modules/power-assert/build/power-assert.js',
                'node_modules/sinon/pkg/sinon.js',
                'src/%type%/test/**/*.js'
            ]
        },
        // 複製: copy
        copy: [
            {
                from: 'src/%type%/lib/**/*',
                to: 'public/%type%/lib'
            },
            {
                from: 'src/%type%/images/**/*',
                to: 'public/%type%/images'
            }
        ]
    }
};
