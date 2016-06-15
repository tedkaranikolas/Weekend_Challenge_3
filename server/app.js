var express=require('express');
var app=express();
var path=require('path');
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded( {extended: false} );

var server=app.listen(process.env.PORT || 3000, function() {
  console.log('server is on');
});

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.resolve('public/index.html'));
});

app.post('/calculate', urlencodedParser, function(req, res){
  console.log( "it's pinging here, too");
  console.log( req.body.inputX + " " + req.body.inputY + " " + req.body.operation );
  res.write("it's pinging from calculate");
  res.end();
});
