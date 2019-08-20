var http = require('http');
var app = require('./app.js');

http.createServer(app.start).listen(3000);