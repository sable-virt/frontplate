/**
 * 一括読み込みタスク
 * 指定されたディレクトリ以下のスクリプトをrequireする
 */

import fs from 'fs';
import path from 'path';
import _ from 'lodash';

// gulpディレクトリにあるタスクをロード
let files = fs.readdirSync(__dirname),
    result = [];

_.forEach(files, (file) => {
    let stats = fs.statSync(path.join(__dirname, file));
    if (stats.isFile() && path.extname(file) === '.js') {
        let name = path.basename(file, '.js');
        if (name === 'load') return;
        result[name] = require(__dirname + '/' + name);
    }
});

export default result;
