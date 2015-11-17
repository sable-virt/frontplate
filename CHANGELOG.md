<a name="2.0.0"></a>
# [2.0.0](https://github.com/frontainer/frontplate/compare/1.1.6...v2.0.0) (2015-11-17)


### Breaking

* SCSSのコンパイル対象と監視対象を切り分け ([8b5d9fe2ad5076986760064ebb6f5398a6e6766f](https://github.com/frontainer/frontplate/commit/8b5d9fe2ad5076986760064ebb6f5398a6e6766f))
* cssnanoからcssoに変更 ([328c866dfa8757d0b4192c5de8c3ffdeb77efd96](https://github.com/frontainer/frontplate/commit/328c866dfa8757d0b4192c5de8c3ffdeb77efd96))

### Docs

* ライセンス表記を外部ファイル化 ([5ad3c21ad7f3304a6ddbfce29d8d63b6017aa41b](https://github.com/frontainer/frontplate/commit/5ad3c21ad7f3304a6ddbfce29d8d63b6017aa41b))

### New

* sass-lintとdoiuseを導入 ([176566de87517a88c80a1e0cf0e3bb971e73f1ba](https://github.com/frontainer/frontplate/commit/176566de87517a88c80a1e0cf0e3bb971e73f1ba))

### Update

* ESLintのno-var,no-protoを2(error)に設定 ([0fd78d7c03f9d40e53d1edf11b90ee581376eb8b](https://github.com/frontainer/frontplate/commit/0fd78d7c03f9d40e53d1edf11b90ee581376eb8b))
* config.jsからBrowserSyncのproxyを設定できるよう修正 ([227432b53191fc6801022ba8e9b47929d9cbbfec](https://github.com/frontainer/frontplate/commit/227432b53191fc6801022ba8e9b47929d9cbbfec))
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