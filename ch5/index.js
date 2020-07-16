/*

var express = require('express');
var app = express();

app.get('/sayhello', function(req, res) {
    res.send('Hello World!');
});

app.get('/saygoodbye', function(req, res) {
    res.send('Bye bye!');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
})

*/


var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type" : "text/plain" });
    response.end("Hello World\n");
});

server.listen(8000);