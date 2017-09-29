var server_URL = "";
$(document).ready(function() {
	$('#btn-create-account').click(function(){
		window.open("/register_cust", "_self");
	});
	$('#btn-cancel-regist').click(function(){
		window.open("/customer", "_self");
	});

	$('#btn-submit-regis').submit(function (){
		
	});
});