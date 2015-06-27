/**
 * プラグイン読み込み
 * 指定したパターンのプラグインを自動的に読み込む
 */
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
$.browser = require('browser-sync');

module.exports = $;