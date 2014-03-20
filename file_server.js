var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filelocation = process.argv[3];

var server = http.createServer(function (req,res){
	var readStream = fs.createReadStream(filelocation);

    readStream.pipe(res);
});
server.listen(port);