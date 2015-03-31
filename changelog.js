var changelog = require("conventional-changelog");
var fs = require('fs');
changelog({
    pkg: './package.json'
}, function(err, log) {
    fs.writeFileSync("./CHANGELOG.md", log);
});