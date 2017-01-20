var express = require('express');
var app = express();
var path = require('path');

app.set('port',3000);

app.use(function(rec, res, next){
	console.log(rec.method, rec. url);
	next();
});

app.use(express.static(path.join(__dirname, 'public')));


app.get('/json', function(rec, res){
	console.log("get the json");
	res.status(200);
	res.json({'jsondata': true});
});

app.get('/file', function(rec, res){
	console.log("get the json");
	res.status(200);
	res.sendfile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), function(){
	var port = server.address().port;	
	console.log('Magic Happens on Port ' + port);
});

