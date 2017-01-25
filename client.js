	displayView = function(view){
	   // the code required to display a view
	   document.getElementById("clientView").innerHTML = view;
	};
window.onload = function(){
   //code that is executed as the page is loaded.
   //You shall put your own custom code here.
   	const welcomeView = document.getElementById('welcomeView');
   	const profileView = document.getElementById('profileView');

   	let currentView = document.getElementById('clientView');

   	var loginButton = document.getElementById('loginButton');
   	var signupButton = document.getElementById('signupButton'); 


	if(currentView == ""){
		displayView(welcomeView.innerHTML);
	}
	else if(loginButton.onclick = function() || signupButton.onclick = function()) {
		displayView(profileView.innerHTML);
	}

//window.alert() is not allowed to be used in your implementation.
    window.alert("Hello TDDD97!");
};
