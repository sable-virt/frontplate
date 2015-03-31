var config = Object.create(require('../config'));
var DIR = getType(process.argv);
var TYPE_REG = /%type%/g;

function getType(args) {
    for (var i = 0, len = args.length; i < len; i++) {
        if (args[i].charAt(0) === '-') {
            return args[i].replace(/^-/, '');
        }
    }
    return config.defaultPath;
}
function buildPath(data) {
    for (var key in data) {
        var val = data[key];
        if (typeof val === 'string') {
            data[key] = val.replace(TYPE_REG, DIR);
        } else {
            data[key] = buildPath(val);
        }
    }
    return data;
}
buildPath(config);
module.exports = config;