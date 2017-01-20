var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = 'Good evening sir';
} else if (hourNow > 12) {
	greeting = 'Good afternoon sir';
} else if (hourNow > 0) {
	greeting = 'Good morning sir';
} else {
	greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');