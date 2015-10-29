/**
 * コンフィグタスク
 * config.jsを読み取り、パスを書きかえるタスク
 * 定数の設定も行う
 */

var _ = require('lodash');
var config = require('../config');
var TYPE_REG = /%type%/g;
/**
 * コマンドで指定されたタイプを取得する
 * @param args
 * @returns {*}
 */
function getType(args) {
    var result = _.findLast(args, function(val) {
        return /^-(?!-)+/.test(val);
    });
    if (result) {
        return result.replace(/^-/, '');
    }
    return config.defaultPath;
}
/**
 * パスをタイプに合わせて書きかえる
 * @param data
 * @returns {*}
 */
function buildPath(data) {
    if (typeof data === 'number') return data;
    if (typeof data === 'string') return data.replace(TYPE_REG, getType(process.argv));
    for (var key in data) {
        var value = data[key];
        delete data[key];
        data[buildPath(key)] = buildPath(value);
    }
    return data;
}
var conf = buildPath(config);
conf.TYPE = getType(process.argv);
conf.IS_PRODUCTION = false;
module.exports = conf;