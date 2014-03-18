var fs = require('fs');
var input;
fs.readFile(process.argv[2], function read(err, data) {
    if (err) {
        throw err;
    }
    input = data;
    processFile();
});


function processFile() {
	var processed = input.toString();
	var line_array = processed.split("\n");
	console.log(String(line_array.length-1));
    console.log(content);
}