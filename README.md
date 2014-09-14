# Frontplate

個人的に利用しているWeb制作テンプレート

## Dependence

* [Gulp](http://gulpjs.com/)
* [Browserify](http://browserify.org/)

## Tasks

最初に必要なモジュールをインストール

    npm install

### ファイル監視の実行 & サーバー起動

```
# pc
gulp

# sp
gulp -sp
```

### スプライト画像生成

images/spites以下のディレクトリごとにスプライト画像とsassファイルを出力

* スプライト画像 - images/sprites/*.png
* sass - sass/sprites/_*.scss

```
# pc
gulp sprite

# sp
gulp sprite -sp
```

### サーバーのみ起動

```
# pc
gulp serv

# sp
gulp serv -sp
```

### Minify

```
# pc
gulp -min

# sp
gulp -sp -min
```

##  Plugins

* [browser-sync](https://github.com/shakyShane/browser-sync)
* [gulp-autoprefixer](https://www.npmjs.org/package/gulp-autoprefixer)
* [gulp-browserify](https://www.npmjs.org/package/gulp-browserify)
* [gulp-csso](https://www.npmjs.org/package/gulp-csso)
* [gulp-ejs](https://www.npmjs.org/package/gulp-ejs)
* [gulp-foreach](https://www.npmjs.org/package/gulp-foreach)
* [gulp-frontnote](https://www.npmjs.org/package/gulp-frontnote)
* [gulp-htmlhint](https://www.npmjs.org/package/gulp-htmlhint)
* [gulp-iconfont](https://www.npmjs.org/package/gulp-iconfont)
* [gulp-imagemin](https://www.npmjs.org/package/gulp-imagemin)
* [gulp-jshint](https://www.npmjs.org/package/gulp-jshint)
* [gulp-load-plugins](https://www.npmjs.org/package/gulp-load-plugins)
* [gulp-notify](https://www.npmjs.org/package/gulp-notify)
* [gulp-plumber](https://www.npmjs.org/package/gulp-plumber)
* [gulp-rename](https://www.npmjs.org/package/gulp-rename)
* [gulp-sass](https://www.npmjs.org/package/gulp-sass)
* [gulp-uglify](https://www.npmjs.org/package/gulp-uglify)
* [gulp-w3cjs](https://www.npmjs.org/package/gulp-w3cjs)
* [gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith)
* [jshint-stylish](https://github.com/sindresorhus/jshint-stylish)

## Library
* [jQuery](http://jquery.com/)
* [modernizr](http://modernizr.com/)
* [sass-mediaqueries](https://github.com/paranoida/sass-mediaqueries)

## history
* 0.1.1 - SVGからWebフォントを生成するタスクを追加。frontnoteをバージョンアップ。制作ディレクトリをapp以下に再配置。
* 0.1.0 - Full renewal.
* 0.0.2 - Remove gulp-sprite-glue. Add gulp.spritesmith. And minor bug fix.
* 0.0.1 - release