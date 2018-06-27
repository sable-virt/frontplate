# frontplate

フロントエンド開発の効率を上げるテンプレート

[CHANGELOG](https://github.com/frontainer/frontplate/blob/master/CHANGELOG.md)

[過去バージョン](https://github.com/frontainer/frontplate/releases)

## Dependence

* [NodeJS](https://nodejs.org/) 5.0以上
* [frontplate-cli](https://www.npmjs.com/package/frontplate-cli) 3.0以上

## Usage

`$ frp create YOUR_PROJECT_NAME -g liginc/frontplate`

詳しくは[wiki](https://github.com/frontainer/frontplate-cli/wiki)を参照ください

https://github.com/frontainer/frontplate-cli/wiki

## リリースについて  
  
js,cssの末尾に?ver=0.0.0 とリリースのタグのバージョンをつける仕様になってます。  
リリースの際に以下の手順でリリース対応お願いします。  
  
1.package.jsonのバージョンを "version": "0.0.0"に変えてください。  
  
2.npm run production で css,jsがproduction buildされた後に  
  npm versionが起動されjs,cssの末尾に?ver=0.0.0が付与されます。  
  同時に同じ文字列のgitタグも付与されコミットされます。  
  
3.バージョンの上げ方は以下のとおりになります。  
npm run production patch … ?ver=0.0.1  
npm run production minor … ?ver=0.1.0  
npm run production major … ?ver=1.0.0  
  
■問題点  
・開発中にnpm run productionを毎度してしまうとバージョンが上がり続けると同時にgitタグの方も上がり続けてしまうのが懸念です。  
・開発中には普通のfrp build -c frp.config.js -p を使っていただいてgitタグを使用する際にnpm run productionを使用する  

