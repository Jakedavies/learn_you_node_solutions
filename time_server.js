var net = require('net');
var date = new Date();
var port = process.argv[2];
var server = net.createServer(function (socket){
	var month = '';
	if(date.getDate().length=1)
	{
		month= '0'+(date.getMonth()+1);
	}
	else
	{
		month = date.getMonth()+1;
	}
	var data = date.getFullYear()+'-'+month+'-'+date.getDate()+' '+ date.getHours()+':'+date.getMinutes();
	socket.end(data);
});
server.listen(port);