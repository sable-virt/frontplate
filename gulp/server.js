var gulp = require('gulp'),
    config = frontplate.config,
    $ = frontplate.plugins;

module.exports = function (root, port) {
    return $.browser.init(null, {
        server: {
            baseDir: root,
            port: port,
            notify: false
        }
    });
};

