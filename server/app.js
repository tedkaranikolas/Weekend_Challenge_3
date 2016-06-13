var express=require('express');
var app=express();
var path=require('path');
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded( {extended: false} );

var server=app.listen( 3000, 'localhost', function(){
  console.log('server is on');
});

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.resolve('public/index.html'));
});

app.post('/calculate', urlencodedParser, function(req, res){
  res.write("it's pinging from calculate");
  res.end();
});
