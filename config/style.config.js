'use strict';
module.exports = {
  src: `${FRP_SRC}/sass/**/*.scss`,  // 読み込むscss
  dest: `${FRP_DEST}/assets/css`,  // 出力先
  outputStyle: 'compact',
  sourceMap: true,
  plugins: [  // postcssプラグイン
    require('autoprefixer')({   // autoprefixer(https://github.com/postcss/autoprefixer)
      browsers: [
        'ie >= 10',
        'Android >= 4.4'
      ]
    })
  ],
  noGuide: false,
  styleguide: {
    title: 'StyleGuide',
    verbose: false,
    clean: true,
    params: {},
    css: `../${FRP_DEST}/assets/css/style.css`,
    // script: '../public/assets/js/app.js',
  }
};
