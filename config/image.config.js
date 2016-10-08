'use strict';
const core = require('./core.config');
module.exports = {
    src: 'src/images/*.{gif,jpg,png}',  // 読み込むイメージ
    dest: core.basePath + '/assets/images'        // 出力先
};
