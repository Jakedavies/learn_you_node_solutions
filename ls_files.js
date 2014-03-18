var fs = require('fs');
var path = require('path');

var extension = process.argv[3];
fs.readdir(process.argv[2],function (err, list)
{
	var file_list = list;
	for(var i =0;i<file_list.length;i++)
	{
		// console.log(path.extname(file_list[i]));
		// console.log(extension);
		if (path.extname(file_list[i])=="."+extension)
		{
			console.log(file_list[i]);
		}

	}
});