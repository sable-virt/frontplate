var SRC_DIR = './src';

var SCAFFOLEDS = [{
    name: 'Page',
    dir: './',
    ext: '.ejs',
    template: __dirname + '/../../templates/ejs/template.ejs'
},{
    name: 'SASS',
    dir: './sass/',
    ext: '.scss',
    template: __dirname + '/../../templates/sass/template.ejs'
},{
    name: 'JavaScript',
    dir: './js/',
    ext: '.js',
    template: __dirname + '/../../templates/js/template.ejs'
},{
    name: 'TypeScript',
    dir: './js/',
    ext: '.ts',
    template: __dirname + '/../../templates/typescript/template.ejs'
},{
    name: 'Test',
    dir: './test/',
    ext: 'Spec.js',
    template: __dirname + '/../../templates/test/template.ejs'
}];

var SCAFFOLDS_NAMES = SCAFFOLEDS.map(function(scaf) {
    return scaf.name;
});

var INQUIRY = [{
    type: "list",
    name: "file",
    message: "What file do you need",
    choices: SCAFFOLDS_NAMES,
    filter: function(val) {
        var index = SCAFFOLDS_NAMES.indexOf(val);
        return SCAFFOLEDS[index];
    }
},{
    type: "input",
    name: "name",
    message: "What file name",
    filter: function(val) {
        return val;
    },
    validate: function( value ) {
        if (!value) {
            return false;
        }
        return true;
        // return 'error message'
    }
}];

exports.SRC_DIR = SRC_DIR;
exports.SCAFFOLEDS = SCAFFOLEDS;
exports.INQUIRY = INQUIRY;
