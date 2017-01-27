displayView = function(view){
   // the code required to display a view
   clientviewer = document.getElementById('clientviewer').innerHTML;
   document.getElementById("clientviewer").innerHTML = view;
};

window.onload = function(){
    welcomeview  = document.getElementById('welcomeview').innerHTML;

    profileview  = document.getElementById('profileview').innerHTML;
    displayView(profileview);

    document.getElementById('signup').onsubmit=signupChecker;
    document.getElementById('login').onsubmit=signInChecker;// sa att sidan inte laddas om
//code that is executed as the page is loaded.
//You shall put your own custom code here.
//window.alert() is not allowed to be used in your implementation.
};

signupChecker = function(e){    welcomeview  = document.getElementById('welcomeview').innerHTML;
    welcomeview  = document.getElementById('welcomeview').innerHTML;

  e.preventDefault();
  minpwlenght = 3;
  var pass1 = document.getElementById('signup-password').value;
  var pass2 = document.getElementById('signup-password-RE').value;
  var PWchecker = true;
  if (pass1 != pass2){
    alert("Stop this! Password does not match")
    PWchecker = false;
  }
  else if (pass1.length<minpwlenght || pass2.length<minpwlenght) {
    alert("Stop tihs! Password to short")
    PWchecker = false;
  }

  if(PWchecker){
    alert("OK")
  }


  var object = {

    email : document.getElementById('emailInput').value,
    password : document.getElementById('signup-password').value,
    firstname : document.getElementById('firstnameInput').value,
    familyname : document.getElementById('familynameInput').value,
    gender : document.getElementById('genderInput').value,
    city : document.getElementById('cityInput').value,
    country : document.getElementById('countryInput').value

  };
  console.log(object);
  var check = serverstub.signUp(object);
  console.log(check);

  return PWchecker
}


//validate email
signInChecker = function(e){
  e.preventDefault();
//decide view
  profileview  = document.getElementById('profileview').innerHTML;
  welcomeview  = document.getElementById('welcomeview').innerHTML;
  if(validateSignin().success){
    displayView(profileview)
  }
  else{
    displayView(welcomeview)
  }

}

validateSignin = function(){
  var username = document.getElementById('loginUsername').value;
  var password = document.getElementById('loginPassword').value;
  var check = serverstub.signIn(username, password);
  console.log(check);
  return check
}

headerfunc = function(headerID){
  var panelClicked = document.getElementById('headerID');

  switch (headerID) {
    case panelHome:
      document.getElementById('panelHome').style.display = 'block'
      document.getElementById('panelBrowse').style.display = 'none'
      document.getElementById('panelAccount').style.display = 'none'
      return;
    case panelBrowse:
      document.getElementById('panelHome').style.display = 'none'
      document.getElementById('panelBrowse').style.display = 'block'
      document.getElementById('panelAccount').style.display = 'none'
      return;
    case panelAccount:
      document.getElementById('panelHome').style.display = 'none'
      document.getElementById('panelBrowse').style.display = 'none'
      document.getElementById('panelAccount').style.display = 'block'
      return;
    default:
    document.getElementById('panelHome').style.display = 'none'
    document.getElementById('panelBrowse').style.display = 'none'
    document.getElementById('panelAccount').style.display = 'none'
  }
}
