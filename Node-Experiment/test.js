 var fs = require('fs');
 var https = require('https')
 	fs.writeFile(__dirname + "/index.html","<h1>html is great</h1>",function(error){
 		if(error){
 			return console.log(error);

 		}
 		else{
 			console.log('congrats');
 		}
 	});

var link = "https://cdn-images-1.medium.com/max/1600/1*aeYImkD7RlMya7-Q1bFkkg.png";

https.get(link,function(response){
	response.pipe(fs.createWriteStream(__dirname + "/nodejs.png"))
});