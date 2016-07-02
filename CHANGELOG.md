<a name="3.1.0"></a>
# [3.1.0](https://github.com/frontainer/frontplate/compare/3.0.0...v3.1.0) (2016-07-02)


### feat

* スプライト生成サンプルを追加 ([b6802f6005a4adeeba7b16bb339fbaaf80ba5a18](https://github.com/frontainer/frontplate/commit/b6802f6005a4adeeba7b16bb339fbaaf80ba5a18))

### fix

* _つきのscssファイルだとスタイルガイドが生成されない不具合の修正 ([d959ec664ed7c653652e8d1ca28cea908f4ab39e](https://github.com/frontainer/frontplate/commit/d959ec664ed7c653652e8d1ca28cea908f4ab39e))
* babelの設定をwebpack.config.jsから.babelrcに移動 ([197be976c992c055fc9b4cae400a68ed297f8b8f](https://github.com/frontainer/frontplate/commit/197be976c992c055fc9b4cae400a68ed297f8b8f))
* sprite.scssが正しく出力されない不具合を修正 ([17ceed9ba74a9ec104c437547099ef23ebe4113c](https://github.com/frontainer/frontplate/commit/17ceed9ba74a9ec104c437547099ef23ebe4113c))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/frontainer/frontplate/compare/2.0.2...v3.0.0) (2016-02-18)


### Breaking

* lodashを依存パッケージから削除 ([6a833345279dc43ebdefefea25f06c6c75dcd963](https://github.com/frontainer/frontplate/commit/6a833345279dc43ebdefefea25f06c6c75dcd963))
* npm2サポートを停止 ([11437eb3a7a0c13c49723967f5af734fab01f3d4](https://github.com/frontainer/frontplate/commit/11437eb3a7a0c13c49723967f5af734fab01f3d4))

### Build

* テスト環境を5.6/5.0/4.2に変更 ([5d8d0c1c38ef75282c7dbd68c359fc24d47082db](https://github.com/frontainer/frontplate/commit/5d8d0c1c38ef75282c7dbd68c359fc24d47082db))

### Docs

* sprite画像のパスが誤っていたのを修正 ([d74f31ef0fc51aad91f86d1a65c5a847bad4d5b0](https://github.com/frontainer/frontplate/commit/d74f31ef0fc51aad91f86d1a65c5a847bad4d5b0))
* version3とnpmのアップデートについて追記 ([08639c1e9900b13605849e2ec35d8abdd16a1865](https://github.com/frontainer/frontplate/commit/08639c1e9900b13605849e2ec35d8abdd16a1865))

### Fix

* 実際に近いファイルサイズを確認するためにsourcemapsをインラインから外部ファイルに ([5e2fbd6ac9727a2a0d841b2767892afff7695d56](https://github.com/frontainer/frontplate/commit/5e2fbd6ac9727a2a0d841b2767892afff7695d56))

### Upgrade

* eslint/phantomjsを2へバージョンアップ ([0a2066afc3ffec1672a035239d00a7d9923659be](https://github.com/frontainer/frontplate/commit/0a2066afc3ffec1672a035239d00a7d9923659be))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/frontainer/frontplate/compare/2.0.1...2.0.2) (2016-01-21)


### Doc

* update changelog ([37960a96f2ec321aa9655044ee0534f8de3f94f0](https://github.com/frontainer/frontplate/commit/37960a96f2ec321aa9655044ee0534f8de3f94f0))

### New

* 異なる環境でも動作するようDockerfileを追加 ([63cc1014fea16f4ab1b2a7f440c8a3ae1a76c217](https://github.com/frontainer/frontplate/commit/63cc1014fea16f4ab1b2a7f440c8a3ae1a76c217))

### Update

* 依存パッケージのアップデート ([f6099f9095822bf47c743da01fb4b97d1f3bc1af](https://github.com/frontainer/frontplate/commit/f6099f9095822bf47c743da01fb4b97d1f3bc1af))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/frontainer/frontplate/compare/2.0.0...2.0.1) (2015-12-27)


### Breaking

* SCSSのコンパイル対象と監視対象を切り分け ([8b5d9fe2ad5076986760064ebb6f5398a6e6766f](https://github.com/frontainer/frontplate/commit/8b5d9fe2ad5076986760064ebb6f5398a6e6766f))
* __IS_PRODUCTIONをデフォルトで提供するのを停止 ([6df832b228b44ade10e0f96099ff348e1088c955](https://github.com/frontainer/frontplate/commit/6df832b228b44ade10e0f96099ff348e1088c955))
* cssnanoからcssoに変更 ([328c866dfa8757d0b4192c5de8c3ffdeb77efd96](https://github.com/frontainer/frontplate/commit/328c866dfa8757d0b4192c5de8c3ffdeb77efd96))

### Build

* gulpタスクをES6へ書き替え ([730e0fbfe78631e5289edc3a598059cf44667752](https://github.com/frontainer/frontplate/commit/730e0fbfe78631e5289edc3a598059cf44667752))

### Docs

* ライセンス表記を外部ファイル化 ([5ad3c21ad7f3304a6ddbfce29d8d63b6017aa41b](https://github.com/frontainer/frontplate/commit/5ad3c21ad7f3304a6ddbfce29d8d63b6017aa41b))
* ライセンス表記を外部ファイル化 ([4893c7c7d111076b8829cac95fffd7db77924cfa](https://github.com/frontainer/frontplate/commit/4893c7c7d111076b8829cac95fffd7db77924cfa))

### Fix

* BEM記法だとwarningになってしまっていたので'both'にして両対応 ([80c36de6bee7782222454cfd7286269ff6eb0ba5](https://github.com/frontainer/frontplate/commit/80c36de6bee7782222454cfd7286269ff6eb0ba5))
* JavaScriptの監視範囲が必要以上に広くなっていたのを修正 ([35b1161560bbe65ae03374da49309d85f73cb5ab](https://github.com/frontainer/frontplate/commit/35b1161560bbe65ae03374da49309d85f73cb5ab))
* callback待ちのためにctrl+cを2回 実行しないとdefaultタスクが抜けれない不具合の修正 ([2f04f2859884b829552cb1c584d4c837c26857b6](https://github.com/frontainer/frontplate/commit/2f04f2859884b829552cb1c584d4c837c26857b6))
* noParseオプションではコンパイルできない事象があったので、excludeに修正 ([6e834c09fc552f69563995996936468ee954b1d4](https://github.com/frontainer/frontplate/commit/6e834c09fc552f69563995996936468ee954b1d4))
* sass-listでのクォートチェックをしないように変更 ([196dfe66354ed3b5878c2f50db737c892b657f50](https://github.com/frontainer/frontplate/commit/196dfe66354ed3b5878c2f50db737c892b657f50))
* sprite画像が生成されていない不具合の修正 ([45b3a844bfed454d2b54dd1969b4b03b95d5725e](https://github.com/frontainer/frontplate/commit/45b3a844bfed454d2b54dd1969b4b03b95d5725e))
* コピー対象の数が多い時に一部欠落する不具合の修正 ([c529b5b75ac098461927639412f4b206b8792b9e](https://github.com/frontainer/frontplate/commit/c529b5b75ac098461927639412f4b206b8792b9e))
* スプライト画像をRetinaサイズで作成した際に割り切れずボヤける対策のため、paddingを5から6へ修正 ([87ae8da582d57c6a344492e86b87cfee4f04c5b2](https://github.com/frontainer/frontplate/commit/87ae8da582d57c6a344492e86b87cfee4f04c5b2))

### New

* CSSの圧縮にminify-cssを導入 ([c2e3b3374503e1e52051c3747d8c2b506b1defd0](https://github.com/frontainer/frontplate/commit/c2e3b3374503e1e52051c3747d8c2b506b1defd0))
* node-sassオプションをconfigで設定できるように ([43f76b2984b97ee68bf90752b2fffc77ba759d8a](https://github.com/frontainer/frontplate/commit/43f76b2984b97ee68bf90752b2fffc77ba759d8a))
* sass-lintとdoiuseを導入 ([176566de87517a88c80a1e0cf0e3bb971e73f1ba](https://github.com/frontainer/frontplate/commit/176566de87517a88c80a1e0cf0e3bb971e73f1ba))

### Update

* ESLintのno-var,no-protoを2(error)に設定 ([0fd78d7c03f9d40e53d1edf11b90ee581376eb8b](https://github.com/frontainer/frontplate/commit/0fd78d7c03f9d40e53d1edf11b90ee581376eb8b))
* config.jsからBrowserSyncのproxyを設定できるよう修正 ([227432b53191fc6801022ba8e9b47929d9cbbfec](https://github.com/frontainer/frontplate/commit/227432b53191fc6801022ba8e9b47929d9cbbfec))
* spritesmithの仕様変更に合わせて修正 ([002cb84b440a77671dc16c8c759e57c083d89572](https://github.com/frontainer/frontplate/commit/002cb84b440a77671dc16c8c759e57c083d89572))
* webpack-streamを使わずWebPack単体で動作するように ([fc28ecbbb1ab38fe2d0b9c0f0a819fc605abce62](https://github.com/frontainer/frontplate/commit/fc28ecbbb1ab38fe2d0b9c0f0a819fc605abce62))
* webpack.configのexcludeとnoParseの設定を修正 ([ee772c03cc3bc5128703c83c899282fa9de24587](https://github.com/frontainer/frontplate/commit/ee772c03cc3bc5128703c83c899282fa9de24587))



<a name="1.1.6"></a>
## [1.1.6](https://github.com/frontainer/frontplate/compare/1.1.5...1.1.6) (2015-10-29)




<a name="1.1.5"></a>
## [1.1.5](https://github.com/frontainer/frontplate/compare/1.1.4...1.1.5) (2015-09-27)




<a name="1.0.2"></a>
## [1.0.2](https://github.com/frontainer/frontplate/compare/1.0.1...1.0.2) (2015-07-17)




<a name="0.2.0"></a>
# [0.2.0](https://github.com/frontainer/frontplate/compare/0.1.3...0.2.0) (2014-10-04)




<a name="0.1.3"></a>
## [0.1.3](https://github.com/frontainer/frontplate/compare/0.1.2...0.1.3) (2014-09-20)




<a name="0.1.2"></a>
## 0.1.2 (2014-09-20)




