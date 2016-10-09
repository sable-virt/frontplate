# frontplate

フロントエンド開発の効率を上げるテンプレート

[CHANGELOG](https://github.com/frontainer/frontplate/blob/master/CHANGELOG.md)

[過去バージョン](https://github.com/frontainer/frontplate/releases)

## Dependence

* [NodeJS](https://nodejs.org/) 5.0以上
* [frontplate-cli](https://www.npmjs.com/package/frontplate-cli)

## Get Started

### 準備

## Get Started

frontplate-cliをインストールします。

```
npm i frontplate-cli -g
```

次にプロジェクトを生成します。

```
frp create my-wp-app --preset wp
```

ダウンロードとインストールが完了したら、できたプロジェクトに移動し、`npm start` コマンドを実行します。

```
cd my-wp-app
npm start
```

### 全体をビルド

すべてのファイルをビルドします。開発を始める前に必ず一度はビルドしましょう。

```
npm run build
```

### ファイル監視の実行 & サーバー起動

以下のコマンドを実行するとブラウザで開発中のページが開きます。この状態でCSSやJSを修正するとユニットテストやLintも同時に実行され、ブラウザが自動的に更新されます。

```
# srcディレクトリを監視
npm run serve
```
### リリースファイル作成

ひと通りの開発が完了した時点で、リリース用のファイルを作成します。
productionタスクではJSとCSSのソースマップが出力されなくなり、高度に圧縮されます。
```
npm run production
```

## 設定

基本設定の場合は設定ファイルは必要ありませんが、カスタマイズ等を行いたい場合は設定ファイルを出力する必要があります。  
次のコマンドを実行することで、frontplate-cliの設定ファイルが出力されます。

```
frp init
```

`frp.config.js` にテンプレートの出力先やプラグインのオプション設定が記述されています。
詳しくは`frp.config.js` 及びconfigフォルダのファイルを参照してください。

## Library

- JS:   [Modernizr](http://modernizr.com/)

## 構成

```
package.json - nomパッケージ設定ファイル
/public - コンパイルされたデータが入っている
/src - 開発用フォルダ
  ┣ /images - 画像を入れるフォルダ。public/pc/imagesに複製される
  ┣ /js - JSフォルダ。ES6で書ける。直下にあるJSは
  ┃  ┣ app.js - public/pc/js/app.jsとして出力される
  ┃  ┣ app-spec.js - -spec.jsは出力されない。テスト実行時に読み込まれる
  ┃  ┣ xxx.js - public/pc/js/xxx.jsとして出力される
  ┃  ┗ /sub
  ┃     ┗ sub.js - ここファイルは出力されないが変更は監視される
  ┣ /lib - ライブラリフォルダ。外部ライブラリ等を置く。public/pc/libに複製される
  ┣ /sass - sassフォルダ。ファイル名が_(アンダースコア)で始まっていないscssはpublic/pc/cssに出力される
  ┣ /sprites - スプライト生成フォルダ。ここに作ったフォルダがsass/sprites/_フォルダ名.scssとして出力される
  ┃  ┗ /icon - スプライト画像を入れるフォルダ。class="icon icon-ファイル名"で参照されるので英数字推奨
  ┣ /test - テストコードを置くフォルダ。ここにおいたファイルはテストコードとして実行される
  ┗ /view - ビューファイル(ejs)を置くフォルダ。ファイル名が_(アンダースコア)で始まっていないejsはpublic/pcに出力される
      ┣ index.ejs - public/pc/index.htmlとして出力される
      ┗ parts/
         ┣ _header.ejs - アンダースコアから始まるファイルは出力されない
         ┗ sub.ejs - public/pc/parts/sub.htmlとして出力される
```

## Dependencies documentation

このテンプレートは[frontplate-cli](https://github.com/frontainer/frontplate-cli)がベースになっています。

詳細なドキュメントはCLIのドキュメントを参照してください。

[frontplate-cli](https://github.com/frontainer/frontplate-cli)
