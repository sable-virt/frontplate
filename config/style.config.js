'use strict';
const SUPPORT_BROWSERS = [
    'last 3 version',
    'ie >= 9',
    'Android >= 4.0'
];
module.exports = {
    src: 'src/sass/**/*.scss',
    dest: 'public/assets/css',
    plugins: [
        require('autoprefixer')({
            browsers: SUPPORT_BROWSERS
        })
    ]
};