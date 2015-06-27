# Frontplate

個人的に利用しているWeb制作テンプレート(version 1.0.0)

## Dependence

* [Gulp](http://gulpjs.com/)

## Tasks

最初に必要なモジュールをインストール

```
npm run start
```

### ファイル監視の実行 & サーバー起動

```
# ディレクトリを監視(src/pc)
gulp

# 指定ディレクトリを監視（src/spディレクトリを監視する例)
gulp -sp
```

### スプライト画像生成

images/spites以下のディレクトリごとにスプライト画像とsassファイルを出力

* スプライト画像 - images/sprites/*.png
* sass - sass/sprites/_*.scss

```
# スプライト生成
gulp sprite

# 指定ディレクトリのスプライト生成
gulp sprite -sp
```

#### 例

```
images/sprites/icon/icon-twitter.png
images/sprites/icon/icon-twitter.png
```
↓ gulp sprites
```
images/sprites/icon.png
sass/sprites/_icon.scss
```

#### Retinaディスプレイ用スプライト生成

ディレクトリ名の末尾を-2xにする

```
images/sprites/icon-2x/icon-twitter.png
images/sprites/icon-2x/icon-twitter.png
```

### サーバーのみ起動

```
# サーバー起動
gulp server

# 指定ディレクトリでサーバー起動
gulp server -sp
```

### リリースファイル作成

```
gulp production
```

### テストの実行

```
gulp test
```

## library

- JS:   [Modernizr](http://modernizr.com/)
- CSS:  [Semantic Grid Layout](http://gridle.org/)

## History
* 1.0.0 - 大幅に構成変更。mocha&power-assert,Babel導入
* 0.3.0 - パッケージの整理
* 0.2.0 - Webpackとディレクトリ複数対応とパッケージの整理
* 0.1.3 - Browserifyの処理を最適化
* 0.1.2 - AngulerJS用タスクにgulp-ng-annotateを追加。処理分岐のためgulp-ifを追加。
* 0.1.1 - SVGからWebフォントを生成するタスクを追加。frontnoteをバージョンアップ。制作ディレクトリをapp以下に再配置。
* 0.1.0 - Full renewal.
* 0.0.2 - Remove gulp-sprite-glue. Add gulp.spritesmith. And minor bug fix.
* 0.0.1 - release