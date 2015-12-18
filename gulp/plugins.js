'use strict';
/**
 * プラグイン読み込み
 * 指定したパターンのプラグインを自動的に読み込む
 */
let loader = require('gulp-load-plugins');
let browser = require('browser-sync');

let $ = loader({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
$.browser = browser;
module.exports = $;