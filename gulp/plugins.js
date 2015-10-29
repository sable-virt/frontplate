/**
 * プラグイン読み込み
 * 指定したパターンのプラグインを自動的に読み込む
 */
var loader = require('gulp-load-plugins');
var browser = require('browser-sync');

var $ = loader({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
$.browser = browser;
module.exports = $;