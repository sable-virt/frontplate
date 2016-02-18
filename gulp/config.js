'use strict';
/**
 * コンフィグタスク
 * config.jsを読み取り、パスを書きかえるタスク
 * 定数の設定も行う
 */

let config = require('../config');
const TYPE_REG = /%type%/g;
/**
 * コマンドで指定されたタイプを取得する
 * @param args
 * @returns {*}
 */
function getType(args) {
    args = args || [];
    let i = args.length;
    let result;
    while(i--) {
        if (/^-(?!-)+/.test(args[i])) {
            result = args[i];
            break;
        }
    }
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
    for (let key in data) {
        let value = data[key];
        delete data[key];
        data[buildPath(key)] = buildPath(value);
    }
    return data;
}
let conf = buildPath(config);
conf.TYPE = getType(process.argv);
conf.IS_PRODUCTION = false;
module.exports = conf;