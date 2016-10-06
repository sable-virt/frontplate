'use strict';
const SUPPORT_BROWSERS = [
    'last 3 version',
    'ie >= 9',
    'Android >= 4.0'
];
module.exports = {
    src: 'src/sass/**/*.scss',  // 読み込むscss
    dest: 'public/assets/css',  // 出力先
    plugins: [  // postcssプラグイン
        require('autoprefixer')({   // autoprefixer(https://github.com/postcss/autoprefixer)
            browsers: SUPPORT_BROWSERS
        })
    ]
};