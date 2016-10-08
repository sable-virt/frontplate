'use strict';
const core = require('./core.config');
module.exports = {
    src: 'src/view/**/*.ejs',   // 読み込むビューファイル
    dest: core.basePath,        // 出力先
    params: {                   // ビューで使うグローバル変数
        title: 'title'
    },
    // １つのテンプレートで複数作成するときに使用する
    pages: [
        // {
        //     name: 'filename',    // 出力するファイル名
        //     src: 'src/view/tmpl/_template.ejs',  // テンプレート
        //     params: {       // ページに渡す変数
        //         title: 'page title'
        //     }
        // }
    ],
    // htmlhintルール(https://github.com/yaniswang/HTMLHint/wiki/Rules)
    rules: {
        "tagname-lowercase": true,
        "attr-lowercase": true,
        "attr-value-double-quotes": true,
        "attr-value-not-empty": true,
        "attr-no-duplication": true,
        "doctype-first": false,
        "tag-pair": true,
        "tag-self-close": false,
        "spec-char-escape": true,
        "id-unique": true,
        "src-not-empty": true,
        "head-script-disabled": true,
        "img-alt-require": true,
        "doctype-html5": true,
        "id-class-value": false,
        "style-disabled": false,
        "space-tab-mixed-disabled": true,
        "id-class-ad-disabled": true,
        "href-abs-or-rel": false,
        "attr-unsafe-chars": true
    }
};
