function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getIntegerArray(rangeArray = 10, min = -10, max = 10) {
	mass = new Array(rangeArray);

	for (i = 0; i < rangeArray; i++) {
		mass[i] = getRandomInt(min, max);
	}

	return mass;
}

function getNumberFromUser(nameVariable) {
	variable = parseInt(prompt('Enter a number for the ' + nameVariable + ':', 5));

	while (isNaN(variable)) {
		variable = parseInt(prompt('You entered no number. Need to enter a number for ' + nameVariable, 5));
	}

	return variable;
}

function summIntegerElements(massElements) {
	for (i = summ = 0; i < massElements.length; i++) {
		if (Number.isInteger(massElements[i])) {
			summ += massElements[i];
		}
	}

	return summ;
}

function compareArray(firstMass = [], secondMass = []) {
	if (!firstMass.length) {
		return secondMass;
	} else if (!secondMass.length) {
		return firstMass;
	}

	if (summIntegerElements(firstMass) >= summIntegerElements(secondMass)) {
		return firstMass;
	} else {
		return secondMass;
	}
}
