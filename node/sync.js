var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n');
console.log(lines.length - 1);