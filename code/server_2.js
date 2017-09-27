var express = require('express');
var app = express();
var server = require('http').createServer(app);

//Choose PORT and start server
const PORT = process.env.PORT || 8080;
server.listen(PORT);
console.log('Server running on PORT ' + PORT);

app.get('/', function(req, res) {
    res.sendFile(__dirname + 'index.html');
});


process.on('uncaughtException', function(error){
    console.log(error.stack);
});