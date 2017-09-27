var http = require('http');
var url = require('url');
var fs = require('fs');

const PORT = process.env.PORT || 8080;

console.log(process.pid);
//require('daemon')();
console.log("Server running on port " + PORT);
console.log(process.pid);

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var location = '.' + q.pathname;
    var filename;
    console.log("Going to " + filename);

    if (filename == "./") {
        filename == "index.html"
    }
    switch (location) {
        default: 
            filename = "login_cust.html";
            break;
        case "customer":
            filename = "login_cust.html";
            break; 
        case "broker":
            filename = "login_broker.html";
        case "manager":
            filename = "manager.html";
    }
    console.log("Going to " + filename);

    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(200, {'Content-Type': 'text/html'});
            return res.end('404 Not Found.');
        }
        res.writeHead(200, {'COntent-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(PORT);
