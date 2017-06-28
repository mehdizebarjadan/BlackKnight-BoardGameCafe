//Victoria Tsukanova

//REGEX TO VALIDATE USER INPUT

var ck_name = /^[A-Za-z]*/;
var ck_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

window.onload=function(){

var formHandle = document.forms[0];
formHandle.onsubmit = processForm;

function processForm(){

var customerLocation = document.getElementById("location").value;
var customerLocation2 = document.getElementById("select");

if (customerLocation=="0"){
	customerLocation2.style.color = "rgb(191,37,47)"; //COLOR INDICATOR
	return false;
}

var  nameValue =document.getElementById("formName");
if (nameValue.value === "" || nameValue.value === null){
		nameMsg = document.getElementById("nameErr");
		nameErr.innerHTML = "Please enter your name"; //HELPER TEXT
		nameValue.focus(); //FOCUS METHOD
	    return false;
}

//REGEX VALIDATION FOR THE VALID NAME

 if (!ck_name.test(nameValue.value)){
		nameMsg = document.getElementById("nameErr");
		nameErr.innerHTML = "Enter a proper name please";
		nameValue.focus(); 
	    return false;
	}

var emailValue = document.getElementById("custEmail");
if (emailValue.value === "" || emailValue.value === null){
	emailMsg = document.getElementById("emailErr");
	emailErr.innerHTML = "Please enter your email";
	emailValue.focus();
	return false;

}

//REGEX VALIDATION FOR THE VALID EMAIL ADDRESS

if (!ck_email.test(emailValue.value)){
		emailMsg = document.getElementById("emailErr");
		emailErr.innerHTML = "Enter a proper email please"; //HELPER TEXT
		emailValue.focus(); //FOCUS METHOD
	    return false;
	}

   
var msgValue= document.getElementById("formMessage");
if (msgValue.value === "" || msgValue.value === null){
	msgMsg = document.getElementById("emailErr");
	msgErr.innerHTML = "Please enter your message"; //HELPER TEXT
	msgValue.focus();//FOCUS METHOD
	return false;

}

}

}