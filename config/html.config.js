module.exports = {
    src: 'src/view/**/*.ejs',
    dest: 'public',
    // ejs params
    params: {
        title: 'title'
    },
    // htmlhint rules
    rules: {
        "tagname-lowercase": true,
        "attr-lowercase": true,
        "attr-value-double-quotes": true,
        "attr-value-not-empty": true,
        "attr-no-duplication": true,
        "doctype-first": false,
        "tag-pair": true,
        "tag-self-close": false,
        "spec-char-escape": true,
        "id-unique": true,
        "src-not-empty": true,
        "head-script-disabled": true,
        "img-alt-require": true,
        "doctype-html5": true,
        "id-class-value": false,
        "style-disabled": false,
        "space-tab-mixed-disabled": true,
        "id-class-ad-disabled": true,
        "href-abs-or-rel": false,
        "attr-unsafe-chars": true
    }
};