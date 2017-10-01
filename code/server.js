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
//Customer
app.get('/', function(req, res){
    res.sendFile(__dirname + '/html/login_cust.html');
});
app.get('/customer', function(req, res){
    res.sendFile(__dirname + '/html/login_cust.html');
});
app.get('/register_cust', function(req, res){
    res.sendFile(__dirname + '/html/Register_cust.html');
});
app.get('/customer/home', function(req, res){
    res.sendFile(__dirname + '/html/home_customer.html');
});
app.get('/customer/preferences', function(req, res){
    res.sendFile(__dirname + '/html/preferences_customer.html');
});
app.get('/customer/sell', function(req, res){
    res.sendFile(__dirname + '/html/sell_home.html');
});
app.get('/customer/account', function(req, res){
    res.sendFile(__dirname + '/html/account_customer.html');
});

//Broker
app.get('/broker', function(req, res){
    res.sendFile(__dirname + '/html/login_broker.html');
});
app.get('/broker/home', function(req, res){
    res.sendFile(__dirname + '/html/home_broker.html');
});
app.get('/broker/timeTable', function(req, res){
    res.sendFile(__dirname + '/html/time_table.html');
});
app.get('/broker/account', function(req, res){
    res.sendFile(__dirname + '/html/account_broker.html');
});

//Manager
app.get('/manager', function(req, res){
    res.sendFile(__dirname + '/html/login_manager.html');
});
app.get('/manager/home', function(req, res){
    res.sendFile(__dirname + '/html/home_manager.html');
});
app.get('/manager/sales', function(req, res){
    res.sendFile(__dirname + '/html/sales_manager.html');
});
app.get('/broker/account', function(req, res){
    res.sendFile(__dirname + '/html/account_manager.html');
});

//Serves all and any of the static files. SUch as CSS, JS and images.
app.get(/^(.+)$/, function(req, res){ 
	res.sendFile( __dirname + req.params[0]); 
});

process.on('uncaughtException', function(error){
    console.log(error.stack);
});