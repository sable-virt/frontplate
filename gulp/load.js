var fs = require('fs'),
    path = require('path');

module.exports = function(dir) {
    // gulpディレクトリにあるタスクをロード
    var files = fs.readdirSync(__dirname),
        result = [];

    files.forEach(function(file) {
        var name = path.basename(file,'.js');
        if (name === 'init') return;
        result[name] = require(__dirname + '/'+name);
    });
    return result;
}();