var _ = require('lodash');
var config = Object.create(require('../config'));
var TYPE = getType(process.argv);
var TYPE_REG = /%type%/g;

function getType(args) {
    var result = _.findLast(args, function(val) {
        return /^-(?!-)+/.test(val);
    });
    if (result) {
        return result.replace(/^-/, '');
    }
    return config.defaultPath;
}
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