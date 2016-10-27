$( document ).ready(function() {
    window.fbAsyncInit = function() {
		FB.init({
		  appId      : '176183376121181',
		  xfbml      : true,
		  version    : 'v2.8'
		});
	
		FB.getLoginStatus(function(response){
			if(response.status === 'connected'){
				//alert('We are connected.');
				//document.getElementById('status').innerHTML = 'We are connected.';
				FB.api('/me', function(userresponse) {
					alertuserresponse
				});
			}else if(response.status === 'not_authorized') {
				document.getElementById('status').innerHTML = 'We are not connected.';
			}
		});
	
		FB.api('/me', function(response) {
			alert(response.name);
		});
       
	};
});
