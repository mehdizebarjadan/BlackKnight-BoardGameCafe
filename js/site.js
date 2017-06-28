$(document).ready(function(){
	currentDate = new Date();// Get the current date
	currentMonth = currentDate.getMonth();// Get the current month
	currentYear = currentDate.getFullYear();// Get the current year
	makeCalendar();
	
	var regex1 = new RegExp(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/); 
	var regex2 = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); 
	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var email = document.getElementById("email");
	var phone = document.getElementById("phone");
	var numGuest = document.getElementById("numGuest");
		
		
	
	
	//Event
	/*$( "#dialog" ).dialog({
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 300
		},
		hide: {
			effect: "puff",
			duration: 300
		},
		buttons: {
			Submit: function() {
				txt = $("#eventTextBox").val();
				$("#c_"+$(this).data('id')).append(txt);
				$("#eventTextBox").val("");
				$("#c_"+$(this).data('id')).attr("onclick","");
				$("#c_"+$(this).data('id')).css("cursor","default");
				$( this ).dialog( "close" );
			},
			Cancel: function(){
				$( this ).dialog( "close" );
			}
		}
	});*/
	
	
	
	//Booking dialog box in jQuery
	$( "#Reservation" ).dialog({
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 300
		},
		hide: {
			effect: "puff",
			duration: 300
		},
		buttons: {
	
			Submit: function() {
				if (firstName.value === "" || firstName.value === null){
				  firstName.style.background = "#a7db95";
				  firstName.focus();
				  Required.innerHTML = "*Please Fill Required Fields";
				  return false;
				 }
			 	if (firstName.value !== "" || firstName.value !== null){
				 firstName.style.background = "#FFF";
				 Required.innerHTML = "";
				 }
				 
				 if (lastName.value === "" || lastName.value === null){
				  firstName.style.background = "#a7db95";
				  firstName.focus();
				  Required.innerHTML = "*Please Fill Required Fields";
				  return false;
				 }
			 	if (lastName.value !== "" || lastName.value !== null){
				 firstName.style.background = "#FFF";
				 Required.innerHTML = "";
				 }
				 
			
			
			  if (!regex2.test(email.value)){
				  email.value="";
				  email.style.background="#a7db95";
				  email.focus();
				  Required.innerHTML = "*Please Fill Required Fields";
				  return false;
			 	 }
			  if(regex2.test(email.value)){
			  email.style.background ="#FF";
			  Required.innerHTM = ""; 
				 }
			
			if(email.value !== "" || email.value !== null){
			  email.style.background ="#FFF";
			  Required.innerHTM = ""; 
				 }
				
			  if (!regex1.test(phone.value)){
			  phone.value = "";
			  phone.style.background="#a7db95";
			  phone.focus();
			  Required.innerHTML = "*Please Fill Required Fields";
			  return false;
				 }
			 if(phone.value !== "" || phone.value !== null){
			  phone.style.background ="#FF";
			  Required.innerHTM = ""; 
				 }
				 
			 if (regex1.test(phone.value)){
			  phone.style.background ="#FFF";
			  Required.innerHTML = " ";
				 }
				 
				 
				 
				 
				 
				if($("#firstName").val() ==""){
					alert("enter your first name");
				}else if($("#lastName").val() ==""){
					alert("enter your Lastname");
				}else if($("#email").val() ==""){
					alert("enter your email address");
				}else if($("#phone").val() ==""){
					alert("enter your phone number");
				}else{
					var txt = "Thank you "+$("#firstName").val()+" "+$("#lastName").val()+"\n" +
						"We Made Reservation For "+$("#numGuest").val()+" Guests\n" +
						"Confirmation will be sent to your email: "+$("#email").val()+"\n" +
						"Or by Phone: "+$("#phone").val();
					$( this ).dialog( "close" );
					alert(txt);
					
				}
				
				
			},
			Cancel: function(){
				$( this ).dialog( "close" );
			}
		}
	});
	
	
});


var monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var htmlStr = "";
var currentDate;
var preDate;
var currentMonth;
var currentYear;
var dateArr = Array();


//Setup values for array in a given time 
function getDateArray(){
	dateArr['dayOfMonth'] = currentDate.getDate();
	dateArr['dayOfWeek'] = currentDate.getDay();
	dateArr['month'] = currentDate.getMonth();
	dateArr['year'] = currentDate.getFullYear();
	var firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
	dateArr['firstDay'] = firstDay.getDay();
	var lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
	dateArr['lastDay'] = lastDay.getDay();
	dateArr['dayNumbers'] = daysInMonth(dateArr['month'],dateArr['year']);
	dateArr['currentDay'] = 1;
}

//Create Calander layout 
function makeCalendar(){
	getDateArray();
	$("#MonthNameTD").html(monthArr[dateArr['month']]+" "+dateArr['year']);
	calendarHeader();
	firstWeek();
	while(dateArr['dayNumbers'] > 7){
		createWeeks();
	}
	lastWeek();
	$("#CalendarTable").html(htmlStr);
	if(dateArr['month'] == currentMonth && dateArr['year'] == currentYear)
		$("#c_"+dateArr['dayOfMonth']).css("background","grey");
}

// click event handler for reservation 
function bookEvent(id){
//	$("#dialog").data('id', id).dialog( "open" );
	$("#Reservation").data('id', id).dialog( "open" );
}

//Sun-Sat header 
function calendarHeader(){
	htmlStr = "<tr>" +
			"<td style='width: 80px'>Sunday</td>" +
			"<td style='width: 80px'>Monday</td>" +
			"<td style='width: 80px'>Tuesday</td>" +
			"<td style='width: 80px'>Wednesday</td>" +
			"<td style='width: 80px'>Thursday</td>" +
			"<td style='width: 80px'>Friday</td>" +
			"<td style='width: 80px'>Saturday</td>" +
		"</tr>";
}

//create the first week of the calandar 
function firstWeek(){
	preDate = new Date(currentDate);
	preDate.setMonth(preDate.getMonth() - 1);
	m = preDate.getMonth();
	y = preDate.getFullYear();
	days = daysInMonth(m,y);
	days = (days - dateArr['firstDay'])+1;
	htmlStr += "<tr id='firstWeek'>"
	for(i=0;i<7;i++){
		if(i < dateArr['firstDay']){
			htmlStr += "<td class='calendarBox'>"+days+"</td>";
			days++;
		}else{
			htmlStr += "<td id='c_"+dateArr['currentDay']+"' class='currentCalendarBox' onclick='bookEvent("+dateArr['currentDay']+")' >"+dateArr['currentDay']+"</td>";
			dateArr['currentDay']++;
			dateArr['dayNumbers']--;
		}
	}
	htmlStr += "</tr>";
}

//Create weeks between first and last week
function createWeeks(){
	htmlStr += "<tr>";
	for(i=0;i<7;i++){
		htmlStr += "<td id='c_"+dateArr['currentDay']+"' class='currentCalendarBox' onclick='bookEvent("+dateArr['currentDay']+")'>"+dateArr['currentDay']+"</td>";
		dateArr['currentDay']++;
		dateArr['dayNumbers']--;
	}
	htmlStr += "</tr>";
}

// Create last week of the calandar
function lastWeek(){
	htmlStr += "<tr>";
	counter = 1;
	for(i=0;i<7;i++){
		if( dateArr['dayNumbers'] != 0){
			htmlStr += "<td id='c_"+dateArr['currentDay']+"' class='currentCalendarBox' onclick='bookEvent("+dateArr['currentDay']+")'>"+dateArr['currentDay']+"</td>";
			dateArr['currentDay']++;
			dateArr['dayNumbers']--;
		}else{
			htmlStr += "<td class='calendarBox'>"+counter+"</td>";
			counter++;
		}
		
	}
	htmlStr += "</tr>";
}

//Calculate the number of day in specific month
function daysInMonth(month,year) {
	
	var monthStart = new Date(year, month, 1);
	var monthEnd = new Date(year, month + 1, 1);
	var monthLength = Math.round((monthEnd - monthStart) / (1000 * 60 * 60 * 24));
	return monthLength;
}

//Event handler for Next an Previous button on the top of the calandar 
function nextPreviousMonth(d){
	currentDate.setMonth(currentDate.getMonth() + d);
	makeCalendar();
}