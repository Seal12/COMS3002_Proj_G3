var http = require('http');
var url = require('url');
var fs = require('fs');

console.log(process.pid);
require('daemon')();
console.log("Server running!");
console.log(process.pid);

http.createServer(function(req, res){
        var q = url.parse(req.url, true);
        var filename = 'index.html';
        fs.readFile(filename, function(err, data){
                if(err){
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        return res.end('404 Not Found.');
                }
                res.writeHead(200, {'COntent-Type': 'text/html'});
                res.write(data);
                return res.end();
        });
}).listen(8080);
