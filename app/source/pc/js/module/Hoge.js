var Hoge = function(name) {
    this.name = name;
};
Hoge.prototype = {
    callName: function() {
        console.log(this.name);
    }
};
module.exports = Hoge;