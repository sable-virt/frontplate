var config = Object.create(require('../config'));
var TYPE = getType(process.argv);
var TYPE_REG = /%type%/g;

function getType(args) {
    for (var i = 0, len = args. length; i < len; i++) {
        if (args[i].charAt(0) === '-') {
            return args[i].replace(/^-/, '');
        }
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