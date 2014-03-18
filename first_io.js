var fs = require('fs');
var input = fs.readFileSync(process.argv[2]);
var processed = input.toString();
var line_array = processed.split("\n");
console.log(String(line_array.length-1));
