/**
 * プラグイン読み込み
 * 指定したパターンのプラグインを自動的に読み込む
 */
import loader from 'gulp-load-plugins';
import browser from 'browser-sync';

let $ = loader({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
$.browser = browser;
export default $;