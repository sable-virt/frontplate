'use strict';
// https://github.com/frontainer/frontplate-cli/wiki/6.%E8%A8%AD%E5%AE%9A
module.exports = function(production) {
  global.FRP_DEST = global.FRP_DEST || 'public';
  return {
    clean: {},
    html: {},
    style: production ? {} : {},
    script: production ? {} : {},
    server: {},
    copy: {},
    sprite: {},
    test: {}
  }
};
