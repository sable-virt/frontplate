'use strict';
const core = require('./core.config');
const SUPPORT_BROWSERS = [
    'last 3 version',
    'ie >= 9',
    'Android >= 4.0'
];
module.exports = {
    src: 'src/sass/**/*.scss',  // 読み込むscss
    dest: core.basePath + '/assets/css',  // 出力先
    plugins: [  // postcssプラグイン
        require('autoprefixer')({   // autoprefixer(https://github.com/postcss/autoprefixer)
            browsers: SUPPORT_BROWSERS
        })
    ],
    styleguide: {
        title: 'StyleGuide',
        verbose: false,
        clean: true,
        params: {},
        css: '../public/assets/css/style.css',
        // script: '../public/assets/js/app.js',
    }
};
