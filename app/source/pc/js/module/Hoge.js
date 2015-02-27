var Hoge = function(name) {
    this.name = name;
};
Hoge.prototype = {
    callName: function() {
        console.log(this.name);
    }
};
export default Hoge;