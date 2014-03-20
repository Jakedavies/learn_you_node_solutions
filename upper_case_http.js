var http = require('http');
var port = process.argv[2];
var map = require('through2-map');
server = http.createServer(function(req,res)
{
	if(req.method=="POST")
	{
		req.pipe(uc).pipe(res);
	}
});
uc = map(function(chunk){
	return chunk.toString().toUpperCase();
})
server.listen(port);	