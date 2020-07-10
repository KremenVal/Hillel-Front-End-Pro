function getRandomInt(min, max) {
	var min = Math.ceil(min);
	var max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getIntegerArray(rangeArray = 10, min = -10, max = 10) {
	var mass = new Array(rangeArray);

	for (var i = 0; i < rangeArray; i++) {
		mass[i] = getRandomInt(min, max);
	}

	return mass;
}

function getNumberFromUser(nameVariable) {
	var variable = parseInt(prompt('Enter a number for the ' + nameVariable + ':', 5));

	while (isNaN(variable)) {
		variable = parseInt(prompt('You entered no number. Need to enter a number for ' + nameVariable, 5));
	}

	return variable;
}

function maxArray(mass = []) {
	for (var i = max = 0; i < mass.length; i++) {
		if (Number.isInteger(mass[i]) && max <= mass[i]) {
			max = mass[i];
		}
	}

	return max;
}

function minArray(mass = []) {
	for (var i = min = 0; i < mass.length; i++) {
		if (Number.isInteger(mass[i]) && min >= mass[i]) {
			min = mass[i];
		}
	}

	return min;
}

function copyArray(mass = [], func) {
	var returnArray = [];

	for (var i = 0; i < mass.length; i++) {
		returnArray.push(mass[i]);
	}

	return returnArray;
}

function isNumber(string) {
	let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	
	for (let i = 0, len = string.length; i < len; i++) {
		if (numbers.indexOf(string[i]) == -1) {
			return false;
		}
	}

	return true;
}
