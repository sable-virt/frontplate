/**
 * コンフィグタスク
 * config.jsを読み取り、パスを書きかえるタスク
 * 定数の設定も行う
 */

import _ from 'lodash';
import config from '../config';
const TYPE_REG = /%type%/g;
/**
 * コマンドで指定されたタイプを取得する
 * @param args
 * @returns {*}
 */
function getType(args) {
    var result = _.findLast(args, (val) => {
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
    for (let key in data) {
        let value = data[key];
        delete data[key];
        data[buildPath(key)] = buildPath(value);
    }
    return data;
}
var conf = buildPath(config);
conf.TYPE = getType(process.argv);
conf.IS_PRODUCTION = false;
export default conf;