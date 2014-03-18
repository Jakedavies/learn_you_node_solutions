var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function callback (response){
	response.pipe(bl(function(err, data){
		if(err)
		{

		}
		var string_output = data.toString();
		console.log(string_output.length);
		console.log(string_output);
	}));

});