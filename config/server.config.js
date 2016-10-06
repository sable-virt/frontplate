'use strict';
module.exports = {
  "server": 'public',   // ドキュメントルート
  "port": 3000,         // ポート
  "middleware": [
  ],
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