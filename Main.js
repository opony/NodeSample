var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/bower_components/jquery/dist'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get("/Index", function(req, res){
    res.sendFile(__dirname + "/View/index.html");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});