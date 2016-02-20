var express = require('express');
var path = require('path');
var app = express();


app.use('/assets', express.static('assets'));
app.use('/bower_components', express.static('bower_components'));
app.get('/',function(req, res){
	return res.sendFile(path.join(__dirname,  'index.html'));
	//return res.sendFile("index.html");
});

app.listen(3000, function(){
	console.log('listening to 3000');
})
