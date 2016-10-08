'use strict';
const core = require('./core.config');
module.exports = {
  "server": core.basePath,  // ドキュメントルート
  "port": 3000,             // ポート
  "middleware": [],
  "ghostMode": {
    "clicks": true,
    "scroll": true,
    "forms": {
      "submit": true,
      "inputs": true,
      "toggles": true
    }
  }
};
