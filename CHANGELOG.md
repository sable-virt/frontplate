<a name="2.0.2"></a>
## [2.0.2](https://github.com/frontainer/frontplate/compare/2.0.1...v2.0.2) (2016-01-17)

### Fix

* productionタスク時にソースマップを出力しないように ([f7ca0e60eadaaec41b9af1b7a7bd70bd14b1ee2e](https://github.com/frontainer/frontplate/commit/f7ca0e60eadaaec41b9af1b7a7bd70bd14b1ee2e))

### Update

* 依存パッケージのアップデート ([f6099f9095822bf47c743da01fb4b97d1f3bc1af](https://github.com/frontainer/frontplate/commit/f6099f9095822bf47c743da01fb4b97d1f3bc1af))


<a name="2.0.1"></a>
# [2.0.1](https://github.com/frontainer/frontplate/compare/2.0.0...v2.0.1) (2015-12-27)


### Build

* gulpタスクをES6へ書き替え ([730e0fbfe78631e5289edc3a598059cf44667752](https://github.com/frontainer/frontplate/commit/730e0fbfe78631e5289edc3a598059cf44667752))

### Fix

* コピー対象の数が多い時に一部欠落する不具合の修正 ([c529b5b75ac098461927639412f4b206b8792b9e](https://github.com/frontainer/frontplate/commit/c529b5b75ac098461927639412f4b206b8792b9e))
* スプライト画像をRetinaサイズで作成した際に割り切れずボヤける対策のため、paddingを5から6へ修正 ([87ae8da582d57c6a344492e86b87cfee4f04c5b2](https://github.com/frontainer/frontplate/commit/87ae8da582d57c6a344492e86b87cfee4f04c5b2))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/frontainer/frontplate/compare/1.1.6...v2.0.0) (2015-12-09)


### Breaking

* SCSSのコンパイル対象と監視対象を切り分け ([8b5d9fe2ad5076986760064ebb6f5398a6e6766f](https://github.com/frontainer/frontplate/commit/8b5d9fe2ad5076986760064ebb6f5398a6e6766f))
* __IS_PRODUCTIONをデフォルトで提供するのを停止 ([6df832b228b44ade10e0f96099ff348e1088c955](https://github.com/frontainer/frontplate/commit/6df832b228b44ade10e0f96099ff348e1088c955))

### Docs

* ライセンス表記を外部ファイル化 ([5ad3c21ad7f3304a6ddbfce29d8d63b6017aa41b](https://github.com/frontainer/frontplate/commit/5ad3c21ad7f3304a6ddbfce29d8d63b6017aa41b))

### Fix

* BEM記法だとwarningになってしまっていたので'both'にして両対応 ([80c36de6bee7782222454cfd7286269ff6eb0ba5](https://github.com/frontainer/frontplate/commit/80c36de6bee7782222454cfd7286269ff6eb0ba5))
* JavaScriptの監視範囲が必要以上に広くなっていたのを修正 ([35b1161560bbe65ae03374da49309d85f73cb5ab](https://github.com/frontainer/frontplate/commit/35b1161560bbe65ae03374da49309d85f73cb5ab))
* callback待ちのためにctrl+cを2回 実行しないとdefaultタスクが抜けれない不具合の修正 ([2f04f2859884b829552cb1c584d4c837c26857b6](https://github.com/frontainer/frontplate/commit/2f04f2859884b829552cb1c584d4c837c26857b6))
* noParseオプションではコンパイルできない事象があったので、excludeに修正 ([6e834c09fc552f69563995996936468ee954b1d4](https://github.com/frontainer/frontplate/commit/6e834c09fc552f69563995996936468ee954b1d4))
* spriteが生成されない不具合の修正 ([45b3a844bfed454d2b54dd1969b4b03b95d5725e](https://github.com/frontainer/frontplate/commit/45b3a844bfed454d2b54dd1969b4b03b95d5725e))

### New

* CSSの圧縮にminify-cssを導入(cssnano廃止) ([c2e3b3374503e1e52051c3747d8c2b506b1defd0](https://github.com/frontainer/frontplate/commit/c2e3b3374503e1e52051c3747d8c2b506b1defd0))
* sass-lintを導入 ([176566de87517a88c80a1e0cf0e3bb971e73f1ba](https://github.com/frontainer/frontplate/commit/176566de87517a88c80a1e0cf0e3bb971e73f1ba))
* node-sassのオプションをconfigから設定できるように([43f76b2984b97ee68bf90752b2fffc77ba759d8a](https://github.com/frontainer/frontplate/commit/43f76b2984b97ee68bf90752b2fffc77ba759d8a))

### Update

* ESLintのno-var,no-protoを2(error)に設定 ([0fd78d7c03f9d40e53d1edf11b90ee581376eb8b](https://github.com/frontainer/frontplate/commit/0fd78d7c03f9d40e53d1edf11b90ee581376eb8b))
* config.jsからBrowserSyncのproxyを設定できるよう修正 ([227432b53191fc6801022ba8e9b47929d9cbbfec](https://github.com/frontainer/frontplate/commit/227432b53191fc6801022ba8e9b47929d9cbbfec))
* spritesmithの仕様変更に合わせて修正 ([002cb84b440a77671dc16c8c759e57c083d89572](https://github.com/frontainer/frontplate/commit/002cb84b440a77671dc16c8c759e57c083d89572))
* webpack-streamを使わずWebPack単体で動作するように ([fc28ecbbb1ab38fe2d0b9c0f0a819fc605abce62](https://github.com/frontainer/frontplate/commit/fc28ecbbb1ab38fe2d0b9c0f0a819fc605abce62))
* webpack.configのexcludeとnoParseの設定を修正 ([ee772c03cc3bc5128703c83c899282fa9de24587](https://github.com/frontainer/frontplate/commit/ee772c03cc3bc5128703c83c899282fa9de24587))




<a name="1.1.6"></a>
## [1.1.6](https://github.com/frontainer/frontplate/compare/1.1.5...1.1.6) (2015-10-29)

* ES5単体で動くように。CSSコンパイル周りの高速化。


<a name="1.1.5"></a>
## [1.1.5](https://github.com/frontainer/frontplate/compare/1.1.4...1.1.5) (2015-09-27)

* 不具合修正とBabelのexperimentalをデフォルト0に。


<a name="1.1.4"></a>
## [1.1.4](https://github.com/frontainer/frontplate/compare/1.1.3...1.1.4) (2015-09-24)

* JSが正しくwatchされない不具合の修正


<a name="1.1.3"></a>
## [1.1.3](https://github.com/frontainer/frontplate/compare/1.1.2...1.1.3) (2015-09-07)

* パッケージ更新とJSのwatch不具合の修正


<a name="1.1.2"></a>
## [1.1.2](https://github.com/frontainer/frontplate/compare/1.1.1...1.1.2) (2015-09-01)

* テストコードもES6で書けるように。ビルド時にユニットテストするかどうかをconfigで設定可能に。


<a name="1.1.1"></a>
## [1.1.1](https://github.com/frontainer/frontplate/compare/1.1.0...1.1.1) (2015-08-30)

* IS_PRODUCTION変数が正しく設定されない不具合の修正


<a name="1.1.0"></a>
# [1.1.0](https://github.com/frontainer/frontplate/compare/1.0.4...1.1.0) (2015-08-30)

* CSSのビルドにPostCSS導入。gulp関連のファイルをES2015化


<a name="1.0.4"></a>
## [1.0.4](https://github.com/frontainer/frontplate/compare/1.0.3...1.0.4) (2015-08-28)

* CSSにSourceMap出力を追加。JS/CSSの圧縮をデフォルトに変更。パッケージアップデート


<a name="1.0.3"></a>
## [1.0.3](https://github.com/frontainer/frontplate/compare/1.0.2...1.0.3) (2015-07-24)

* パッケージアップデート。npm shrinkwrapを実施


<a name="1.0.2"></a>
## [1.0.2](https://github.com/frontainer/frontplate/compare/1.0.1...1.0.2) (2015-07-17)

* ESLintの設定を少しゆるく。StyleGuideタスクでのBrowserSync更新を停止（styleタスクに）


<a name="1.0.1"></a>
## [1.0.1](https://github.com/frontainer/frontplate/compare/1.0.0...1.0.1) (2015-07-14)

* ESLintの設定見直し。不具合の修正。パッケージアップデート。


<a name="1.0.0"></a>
# [1.0.0](https://github.com/frontainer/frontplate/compare/0.3.0...1.0.0) (2015-06-28)

* 大幅に構成変更。mocha&power-assert,Babel導入


<a name="0.3.0"></a>
# [0.3.0](https://github.com/frontainer/frontplate/compare/0.2.0...0.3.0) (2015-02-04)

* パッケージの整理


<a name="0.2.0"></a>
# [0.2.0](https://github.com/frontainer/frontplate/compare/0.1.3...0.2.0) (2014-10-04)

* Webpackとディレクトリ複数対応とパッケージの整理


<a name="0.1.3"></a>
## [0.1.3](https://github.com/frontainer/frontplate/compare/0.1.2...0.1.3) (2014-09-20)

* Browserifyの処理を最適化


<a name="0.1.2"></a>
## 0.1.2 (2014-09-20)

* SVGからWebフォントを生成するタスクを追加。frontnoteをバージョンアップ。制作ディレクトリをapp以下に再配置。