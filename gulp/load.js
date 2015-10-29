/**
 * 一括読み込みタスク
 * 指定されたディレクトリ以下のスクリプトをrequireする
 */

var fs = require('fs');
var path = require('path');
var _ = require('lodash');

// gulpディレクトリにあるタスクをロード
var files = fs.readdirSync(__dirname),
    result = [];

_.forEach(files, function(file) {
    var stats = fs.statSync(path.join(__dirname, file));
    if (stats.isFile() && path.extname(file) === '.js') {
        var name = path.basename(file, '.js');
        if (name === 'load') return;
        result[name] = require(__dirname + '/' + name);
    }
});
module.exports = result;
