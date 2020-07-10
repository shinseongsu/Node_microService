const http = require('http');
const url = require('url');
const querystring = require('querystring');

var server = http.createServer((req, res) => {
    var method = req.method;
    var uri = url.parse(req.url, true);
    var pathname = uri.pathname;

    if(method === "POST" || method === "PUT") {
        var body = "";

        req.on('data', function(data) {
            body += data;
        });
        req.on('end', function() {
            var params;

            if(req.headers['content-type'] == "application/json") {
                params = JSON.parse(body);
            } else {
                params = querystring.parse(body);
            }

            onRequest(res, method, pathname, params);
        });
    } else {
        onRequest(res, method, pathname, uri.path);
    }

}).listen(8000);

function onRequest(res, method, pathname, params) {
    res.end("response!");
}