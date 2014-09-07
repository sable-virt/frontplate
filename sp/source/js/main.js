(function () {
    "use strict";
    var $ = require('jquery');
    var sub = require('./sub.js');
    window.addEventListener("load", init);
    function init() {
        sub();
        $('body').animate({
            marginLeft: '10px'
        },1000).animate({
            marginLeft: 0
        },1000);
    }
})();