var express = require('express');
var app = express();
var server = require('http').createServer(app);

//Choose PORT and start server
const PORT = process.env.PORT || 8080;
server.listen(PORT);
console.log('Server running on PORT ' + PORT);

app.use(express.static('public'));

/***********************************************************/
/************************Serve files************************/
/***********************************************************/
//Serve Web Pagess
app.get('/', function(req, res){
    res.sendFile(__dirname + '/html/login_cust.html');
});

app.get('/customer', function(req, res){
    res.sendFile(__dirname + '/html/login_cust.html');
});

app.get('/register_cust', function(req, res){
    res.sendFile(__dirname + '/html/Register_cust.html');
});

app.get('/broker', function(req, res){
    res.sendFile(__dirname + '/html/login_broker.html');
});

app.get('/manager', function(req, res){
    res.sendFile(__dirname + '/html/login_manager.html');
});

//Serves all and any of the static files
app.get(/^(.+)$/, function(req, res){ 
	res.sendfile( __dirname + req.params[0]); 
});

process.on('uncaughtException', function(error){
    console.log(error.stack);
});