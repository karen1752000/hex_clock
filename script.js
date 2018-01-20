var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');

function hexClock() {
	var time =newDate();
	var hours = time.gethours().toString();
	var minutes = time.getMinutes()toString();
	var seconds = time.getseconds().toString();

	if (hours.length < 2) {
		hours = '0' + hours;
	}

	if (minutes.length < 2) {
		minutes = '0' + minutes;
	}

	if (seconds.length < 2) {
		seconds = '0' + seconds;
	}

	var hexColorStr = '#' + hours + minutes + seconds;
}