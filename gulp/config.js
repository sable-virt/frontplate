/**
 * コンフィグタスク
 * config.jsを読み取り、パスを書きかえるタスク
 * 定数の設定も行う
 */

var _ = require('lodash');
var config = Object.create(require('../config'));
var TYPE = getType(process.argv);
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
    if (typeof data === 'string') return data.replace(TYPE_REG, TYPE);
    for (var key in data) {
        var value = data[key];
        delete data[key];
        data[buildPath(key)] = buildPath(value);
    }
    return data;
}

buildPath(config);
config.TYPE = TYPE;
module.exports = config;