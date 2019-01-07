var countDownDate = new Date("Jan 29, 2019 00:00:00").getTime();
const millis = 1000;
const min = 60;
const sec = 60;
const day = 24;

var countDownFunction = setInterval(function(){
	var now = new Date().getTime();

	var distance = countDownDate - now;

	var days = Math.floor(distance/(millis*sec*min*day));
	var hours = Math.floor((distance%(millis*sec*min*day))/(millis*sec*min));
	var minutes = Math.floor((distance%(millis*sec*min))/(millis*sec));
	var seconds = Math.floor((distance%(millis*min))/millis);

	document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

	if(distance<0){
		clearInterval(countDownFunction);
		document.getElementById("countdown")="EXPIRED";
	}
},1000);