var $ = require('jquery');
module.exports = function() {
    $('h1').animate({
        fontSize: '300%',
        marginLeft: '100px'
    },3000);
};