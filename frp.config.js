'use strict';
module.exports = function(production) {
    return {
        clean: {
            src: 'public'
        },
        html: require('./config/html.config'),
        image: require('./config/image.config'),
        style: require('./config/style.config'),
        script: production ? require('./config/webpack.config.production') : require('./config/webpack.config'),
        server: require('./config/server.config'),
        copy: require('./config/copy.config'),
        sprite: require('./config/sprite.config'),
        test: require('./config/test.conf')
    }
};