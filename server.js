var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// app.use(express.bodyParser());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server now listening on port ' + port);