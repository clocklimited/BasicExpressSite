
var express = require('./')
  , agent = require('webkit-devtools-agent')
  , app = express();

var n = 50;
while (n--) app.get('/foo', function(req, res){ res.send('hello'); });

app.get('/user', function(req, res){
  res.send('hello');
});

// 5900

app.get('/user/:id', function(req, res){
  res.send('hello');
});

// 5500

app.listen(3000);