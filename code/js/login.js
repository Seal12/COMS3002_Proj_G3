var server_URL = "";
$(document).ready(function(){
	$('#login-customer').submit(function(e){
		e.preventDefault();
		window.open("/html/home_customer.html", "_self");
	});
	$('#login-manager').submit(function(e){
		e.preventDefault();
		window.open("/html/home_manager.html", "_self");
	});
	$('#login-broker').submit(function(e){
		e.preventDefault();
		window.open("/html/home_broker.html", "_self");
	});

	//Go to Customer registration page
	$('#btn-create-account').click(function(){
		window.open("/html/Register_cust.html", "_self");
	});
	//Go to customer login page
	$('#btn-cancel-regist').click(function(){
		window.open("/customer", "_self");
	});

	$('#btn-submit-regis').submit(function (){
		
	});
});