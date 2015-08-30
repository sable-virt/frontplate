# frontplate

フロントエンド開発の効率を上げるテンプレート

## Feature

- HTMLモジュール（EJS）
- SASS
- ES2015
- スプライト画像の作成とSassファイルの出力
- JS/CSSの圧縮と最適化
- ベンダープレフィックス付与自動化
- ユニットテスト（Mocha/PowerAssert）
- LiveReload
- ESLint
- HTMLHint
- スタイルガイド生成
- JS/CSSソースマップ

## Dependence

* [NodeJS](https://nodejs.org/)
* [Gulp](http://gulpjs.com/) 3.9以上

```
npm i -g gulp
```

## 構成

```
package.json - nomパッケージ設定ファイル
config.js - テンプレートの設定ファイル。出力先やgulpの設定を変更できる
karma.conf.js - Karmaの設定ファイル
webpack.config.js - WebPackの設定ファイル
gulpfile.js - gulpファイル
npm-shrinkwrap - npmパッケージのバージョン固定ファイル
/gulp - gulpのタスクがたくさん入ってる
/public - コンパイルされたデータが入っている
/src - 開発用フォルダ
  ┣ /pc
  ┃  ┣ /images - 画像を入れるフォルダ。public/pc/imagesに複製される
  ┃  ┣ /js - JSフォルダ。ES6で書ける。直下にあるJSは
  ┃  ┃  ┣ app.js - public/pc/js/app.jsとして出力される
  ┃  ┃  ┗ /modules
  ┃  ┃       ┗ hoge.js - ここファイルは出力されないが変更は監視される
  ┃  ┣ /lib - ライブラリフォルダ。外部ライブラリ等を置く。public/pc/libに複製される
  ┃  ┣ /sass - sassフォルダ。ファイル名が_(アンダースコア)で始まっていないscssはpublic/pc/cssに出力される
  ┃  ┣ /sprites - スプライト生成フォルダ。ここに作ったフォルダがsass/sprites/_フォルダ名.scssとして出力される
  ┃  ┃  ┗ /icon - スプライト画像を入れるフォルダ。class="icon icon-ファイル名"で参照されるので英数字推奨
  ┃  ┣ /test - テストコードを置くフォルダ。ここにおいたファイルはテストコードとして実行される
  ┃  ┗ /view - ビューファイル(ejs)を置くフォルダ。ファイル名が_(アンダースコア)で始まっていないejsはpublic/pcに出力される
  ┃        ┣ index.ejs - public/pc/index.htmlとして出力される
  ┃        ┗ parts/
  ┃              ┣ _header.ejs - アンダースコアから始まるファイルは出力されない
  ┃              ┗ sub.ejs - public/pc/parts/sub.htmlとして出力される
  ┗ /任意のフォルダ - 任意のフォルダを作ってpcと同じ構造を作ることができる
/templates - テンプレートファイルフォルダ
  ┗ sprite.ejs - スプライト画像用テンプレート
```

## Get Started

### 準備

frontplateを任意のディレクトリに展開し、展開したディレクトリで以下のコマンドを実行します。

```
npm run start
```

### 全体をビルド

すべてのファイルをビルドします。開発を始める前に必ず一度はビルドしましょう。

```
gulp build
```

### ファイル監視の実行 & サーバー起動

以下のコマンドを実行するとブラウザで開発中のページが開きます。この状態でCSSやJSを修正するとユニットテストやLintも同時に実行され、ブラウザが自動的に更新されます。

```
# ディレクトリを監視(src/pc)
gulp

# 指定ディレクトリを監視（src/spディレクトリを監視する例)
gulp -sp
```

### スプライト画像生成

複数の画像をタイル上に１枚の画像にするスプライトを自動的に生成します。images/spites以下のディレクトリごとにスプライト画像とsassファイルを出力

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
↓ `gulp sprite`
```
images/sprites/icon.png
sass/sprites/_icon.scss
```

スプライト画像は`images/sprites/*.png`に、sassは`sass/sprites/_*.scss`に展開されるので、作られたsassを`@import`して使用します。

#### Retinaディスプレイ用スプライト生成

ディレクトリ名の末尾を`-2x`にすることで自動的にsass上でサイズを1/2して表示されるようになります。

```
images/sprites/icon-2x/icon-twitter.png
images/sprites/icon-2x/icon-twitter.png
```

### サーバーのみ起動

ビルドや監視が不要でサーバーのみ起動したい場合は以下のコマンドを使用します。

```
# サーバー起動
gulp server

# 指定ディレクトリでサーバー起動
gulp server -sp
```

### リリースファイル作成

ひと通りの開発が完了した時点で、リリース用のファイルを作成します。production
タスクではJSとCSSのソースマップが出力されなくなります。
```
gulp production
```

### テストの実行

ユニットテストのみを実行します。

```
gulp test
```

## library

- JS:   [Modernizr](http://modernizr.com/)

## Other documentation

- [Babel](https://babeljs.io/)
- [EJS](http://www.embeddedjs.com/)
- [ESLint](http://eslint.org/)
- [FrontNote](http://frontainer.com/frontnote/)
- [HTMLHint](http://htmlhint.com/)
- [SASS](http://sass-lang.com/)
- [webpack](http://webpack.github.io/)
- [JSHint](http://jshint.com/)
- [Mocha](http://mochajs.org/)
- [PowerAssert](https://github.com/power-assert-js/power-assert)
- [Sinon](http://sinonjs.org/)

## License

The MIT License (MIT)

Copyright (c) 2015 frontainer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## History
* 1.1.0 - CSSのビルドにPostCSS導入。gulp関連のファイルをES2015化
* 1.0.4 - CSSにSourceMap出力を追加。JS/CSSの圧縮をデフォルトに変更。パッケージアップデート
* 1.0.3 - パッケージアップデート。npm shrinkwrapを実施
* 1.0.2 - ESLintの設定を少しゆるく。StyleGuideタスクでのBrowserSync更新を停止（styleタスクに）
* 1.0.1 - ESLintの設定見直し。不具合の修正。パッケージアップデート。
* 1.0.0 - 大幅に構成変更。mocha&power-assert,Babel導入
* 0.3.0 - パッケージの整理
* 0.2.0 - Webpackとディレクトリ複数対応とパッケージの整理
* 0.1.3 - Browserifyの処理を最適化
* 0.1.2 - AngulerJS用タスクにgulp-ng-annotateを追加。処理分岐のためgulp-ifを追加。
* 0.1.1 - SVGからWebフォントを生成するタスクを追加。frontnoteをバージョンアップ。制作ディレクトリをapp以下に再配置。
* 0.1.0 - Full renewal.
* 0.0.2 - Remove gulp-sprite-glue. Add gulp.spritesmith. And minor bug fix.
* 0.0.1 - release