var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/dist'));
console.log('serving dist on port: ' + port)
app.listen(port);