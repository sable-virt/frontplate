'use strict';
module.exports = [
  {
    src: 'src/sprites/icon/*.{png,gif,jpg}',    // 読み込む画像
    destImage: 'src/images/icon.png',           // 画像出力先
    destCSS: 'src/sass/sprites/_icon.scss',     // CSS出力先
    imgPath: '../images/icon.png',              // CSS内での画像パス
    padding: 2                                  // 画像の間隔
  }
];