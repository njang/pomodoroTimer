
const secInMin = 60;
let minute;
let second;
$('.timer').text('0:00');



const timer = (duration) => {
	duration *= secInMin;
	const countDown = setInterval(() => {
		second = duration % secInMin;
		minute = (duration - second)/secInMin;

		if (second.toString().split('').length == 1) {
			second = "0" + second.toString();
			// console.log(second + 'sec');
		}

		if (duration <= 0) {
			clearInterval(countDown);
		}
		$('.timer').text(`${minute}:${second}`);
		duration--;	
	}, 100);
}

