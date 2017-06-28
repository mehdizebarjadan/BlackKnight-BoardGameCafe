//Victoria Tsukanova


window.onload = cdtd;
function cdtd(){

	var opendate = new Date("October 1, 2014 10:45:00");//THE CAFE OPEN DATE
	var nowdate = new Date();
	var difference = nowdate.getTime()-opendate.getTime();
	var secs = Math.floor(difference/1000);
	var mins = Math.floor(secs/60);
	var hours = Math.floor(mins/60);
	var days = Math.floor(hours/24);

	//CALCULATES THE REMAINDERS
	hours %= 24; 
	mins %= 60;
	secs %= 60;

	//SETTING THE NEW VALUES INTO HTML
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    var updateTime = setTimeout('cdtd()', 1000); //LOOPS THE FUNCTION EVERY 1 SEC

}


