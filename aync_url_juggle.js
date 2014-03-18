var bl = require('bl');
var http = require('http');
var responses = [];

var num_urls = process.argv.length
for(var j = 0; i<num_urls;i++)
{
	responses[j]=null;
}

var response_counter = 0;
for(var i = 2; i<process.argv.length;i++)
{
	(function(i){
		http.get(process.argv[i], function callback (response){
			var response_output="";
			response.pipe(bl(function(err, data){
				var string_output = data.toString();
				response_output = string_output;
			}));
			response.on('end', function(){
				responses[i]=response_output;
				response_counter++;
				if(response_counter==num_urls-2)
				{
					for(var j = 2; j<num_urls;j++)
					{
						console.log(responses[j]);
					}
				}
			});

		});
	})(i);
}