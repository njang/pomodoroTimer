
const secInMin = 60;
const increment = 100; // incremend in milliseconds. Reduce it for faster countdown during development.

let sessionDuration = 3;
let breakDuration = 5;

(() => {
	// let displayElement = $('<input>', {id: 'display', placeholder: 0, disabled: true})
	// $('.calculator').append(displayElement);
	// $('.calculator').append($('<br>'));

	// let buttons = [["&plusmn;", "&radic;", "&percnt;", "&div;"], [7, 8, 9, "&times;"], [4, 5, 6, "&ndash;"], [1, 2, 3, "&plus;"], [".", 0, "&equals;", "C"]];
	// for (let i = 0; i < buttons.length; i++) {
	// 	for (let j = 0; j < buttons[i].length; j++) {
	// 		let buttonValue = (Number.isInteger(buttons[i][j]) ? buttons[i][j] : buttons[i][j].replace(/[^A-Za-z.]/g, ''));
	// 		let buttonElement = $('<button>', {class: 'bg-dark text-white font-weight-bold', value: buttonValue })
	// 		buttonElement.html(buttons[i][j]);
	// 		$('.calculator').append(buttonElement);	
	// 	}
	// 	$('.calculator').append($('<br>'));
	// }
	// $('[value="C"]').attr('class', 'bg-danger text-white font-weight-bold');

	$('#session').html(sessionDuration + ":00");
	$('#break').html(breakDuration + ":00");

})();

// $('#session').html('25:00');
// $('#break').html('05:00');

// main function that runs the timer for the requested duration
const timer = (duration) => {
	duration *= secInMin;
	const countDown = setInterval(() => {
		let second = duration % secInMin;
		let minute = (duration - second)/secInMin;

		let secondString = second.toString().split('');
		if (secondString.length == 1) {
			secondString.unshift("0");
		}
		secondString = secondString.join('');

		if (duration <= 0) {
			alert('coundown over!');
			clearInterval(countDown);
			$('#session').html(sessionDuration + ":00");
			$('#session').attr({'disabled': false});
		}
		$('#session').html(`${minute}:${secondString}`);
		duration--;	
	}, increment);
}

$(document).ready("#button").click(function(event) {
	let entered = event.target.id;
	switch (entered) {
		case "sessionMinus":
			sessionDuration -= 1;
			break;
		case "session":
			// disable the button to prevent multiple simultaneous countdowns.
			$('#session').attr({'disabled': true});
			timer(sessionDuration);
			break;
		case "sessionPlus":
			sessionDuration += 1;
			break;
		case "breakMinus":
			breakDuration -= 1;
			break;
		case "break":
			break;
		case "breakPlus":
			breakDuration += 1;
			break;
	}
	$('#session').html(sessionDuration + ":00");
	$('#break').html(breakDuration + ":00");
	
});