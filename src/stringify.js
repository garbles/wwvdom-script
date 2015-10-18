var fs = require('fs');
module.exports = fs.readFileSync(__dirname + '/../.tmp/bundle.js', 'utf8');
