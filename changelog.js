var changelog = require("conventional-changelog");
var pack = require('./package.json');
var fs = require("fs");

if (!pack.repository.url || !pack.version) throw new Error('Not found repository.url or version on package.json');
changelog({
    repository: pack.repository.url,
    version: pack.version
}, function(err, log) {
    fs.writeFileSync("./CHANGELOG.md", log);
});