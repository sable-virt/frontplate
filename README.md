# Frontplate

個人的に利用しているWeb制作テンプレート

## Dependence

* [Gulp](http://gulpjs.com/)
* [WebPack](http://webpack.github.io/)
* [Bower](http://bower.io/)

## Tasks

最初に必要なモジュールをインストール

    npm install
    bower install

### ファイル監視の実行 & サーバー起動

```
# ディレクトリを監視
gulp

# 指定ディレクトリを監視（spディレクトリを監視する例)
gulp -d=sp
```

### スプライト画像生成

images/spites以下のディレクトリごとにスプライト画像とsassファイルを出力

* スプライト画像 - images/sprites/*.png
* sass - sass/sprites/_*.scss

```
# スプライト生成
gulp sprite

# 指定ディレクトリのスプライト生成
gulp sprite -d=sp
```

### サーバーのみ起動

```
# サーバー起動
gulp serv

# 指定ディレクトリでサーバー起動
gulp serv -d=sp
```

### Minify

```
# ソースをMinify
gulp -min

# 指定ディレクトリのソースをMinify
gulp -d=sp -min
```

##  依存パッケージ

* [browser-sync](https://github.com/shakyShane/browser-sync)
* [connect-modrewrite](https://www.npmjs.com/package/connect-modrewrite)
* [del](https://www.npmjs.com/package/del)
* [exports-loader](https://www.npmjs.com/package/exports-loader)
* [extend](https://www.npmjs.com/package/extend)
* [gulp-autoprefixer](https://www.npmjs.org/package/gulp-autoprefixer)
* [gulp-csso](https://www.npmjs.org/package/gulp-csso)
* [gulp-ejs](https://www.npmjs.org/package/gulp-ejs)
* [gulp-filter](https://www.npmjs.com/package/gulp-filter)
* [gulp-foreach](https://www.npmjs.org/package/gulp-foreach)
* [gulp-frontnote](https://www.npmjs.org/package/gulp-frontnote)
* [gulp-htmlhint](https://www.npmjs.org/package/gulp-htmlhint)
* [gulp-if](https://www.npmjs.org/package/gulp-if)
* [gulp-imagemin](https://www.npmjs.org/package/gulp-imagemin)
* [gulp-karma](https://www.npmjs.org/package/gulp-karma)
* [gulp-load-plugins](https://www.npmjs.org/package/gulp-load-plugins)
* [gulp-notify](https://www.npmjs.org/package/gulp-notify)
* [gulp-plumber](https://www.npmjs.org/package/gulp-plumber)
* [gulp-rename](https://www.npmjs.org/package/gulp-rename)
* [gulp-sass](https://www.npmjs.org/package/gulp-sass)
* [gulp-uglify](https://www.npmjs.org/package/gulp-uglify)
* [gulp-util](https://www.npmjs.org/package/gulp-util)
* [gulp-webpack](https://www.npmjs.org/package/gulp-webpack)
* [gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith)
* [html-loader](https://github.com/twolfson/html-loader)
* [imports-loader](https://github.com/twolfson/imports-loader)
* [jasmine-core](https://github.com/twolfson/jasmine-core)
* [karma](https://github.com/twolfson/karma)
* [karma-jasmine](https://github.com/twolfson/karma-jasmine)
* [karma-phantomjs-launcher](https://github.com/twolfson/karma-phantomjs-launcher)
* [run-sequence](https://github.com/twolfson/run-sequence)
* [source-map-loader](https://github.com/twolfson/source-map-loader)
* [through2](https://github.com/sindresorhus/through2)
* [webpack](https://github.com/sindresorhus/webpack)


## Library
* [jQuery](http://jquery.com/)
* [modernizr](http://modernizr.com/)
* [lodash](https://lodash.com/)

## History
* 0.3.0 - パッケージの整理完了
* 0.2.0 - Webpackとディレクトリ複数対応とパッケージの整理
* 0.1.3 - Browserifyの処理を最適化
* 0.1.2 - AngulerJS用タスクにgulp-ng-annotateを追加。処理分岐のためgulp-ifを追加。
* 0.1.1 - SVGからWebフォントを生成するタスクを追加。frontnoteをバージョンアップ。制作ディレクトリをapp以下に再配置。
* 0.1.0 - Full renewal.
* 0.0.2 - Remove gulp-sprite-glue. Add gulp.spritesmith. And minor bug fix.
* 0.0.1 - release