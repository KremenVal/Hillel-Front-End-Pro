/* Start 3.1 */

range = 10;
massNumbers = new Array(range);
massPrimes = [];

for (index = min = max = 0, indexPrime = 0; index < range; index++) {
	massNumbers[index] = getRandomInt(-50, 50);

	if (isPrime(massNumbers[index])) {
		massPrimes[indexPrime++] = massNumbers[index];
	}

	if (!index) {
		min = max = massNumbers[index]
	} else if (index && massNumbers[index] < min) {
		min = massNumbers[index];
	} else if (index && massNumbers[index] > max) {
		max = massNumbers[index];
	}
}

console.log('Array of numbers is: ' + massNumbers);
console.log('Array of primes is: ' + massPrimes);
console.log('Min number is: ' + min);
console.log('Max number is: ' + max);

/* End 3.1 */

/* Start 3.2 */

commonMass = new Array(range);

for (i = newMin = newMax = 0; i < range; i++) {
	commonMass[i] = getRandomInt(min, max);

	if (!i) {
		newMin = newMax = [commonMass[i], i]
	} else if (i && commonMass[i] < newMin[0]) {
		newMin = [commonMass[i], i];
	} else if (i && commonMass[i] > newMax[0]) {
		newMax = [commonMass[i], i];
	}
}

console.log('Array of numbers is: ' + commonMass);
console.log('NewMin number is: ' + newMin[0]);
console.log('NewMax number is: ' + newMax[0]);

/* End 3.2 */

/* Start 3.3 */

/* For array with only number */

// commonMass[newMin[1]] += commonMass[newMax[1]];
// commonMass[newMax[1]] = commonMass[newMin[1]] - commonMass[newMax[1]];
// commonMass[newMin[1]] -= commonMass[newMax[1]];

// console.log('Array of numbers is: ' + commonMass);

/* For any array */

temp = commonMass[newMin[1]];
commonMass[newMin[1]] = commonMass[newMax[1]];
commonMass[newMax[1]] = temp;

console.log('Array of numbers is: ' + commonMass);

/* End 3.3 */

/* Start 3.4 */

/* For array with only number */

// for (start = 0, end = commonMass.length - 1, halfRange = Math.floor(range / 2); start < halfRange; start++, end--) {
// 	commonMass[start] += commonMass[end];
// 	commonMass[end] = commonMass[start] - commonMass[end];
// 	commonMass[start] -= commonMass[end];
// }

// console.log('Revers array is: ' + commonMass);

/* For any array */

for (start = 0, end = commonMass.length - 1, halfRange = Math.floor(range / 2); start < halfRange; start++, end--) {
	temp = commonMass[start];
	commonMass[start] = commonMass[end];
	commonMass[end] = temp;
}

console.log('Revers array is: ' + commonMass);


/* End 3.4 */

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function isPrime(primeNumber) {
	if (primeNumber == 2) {
		return true;
	} else if (primeNumber < 2 || primeNumber % 2 === 0) {
		return false;
	}

	for (i = 3, sqrt = Math.sqrt(primeNumber); i <= sqrt; i += 2) {
		if (primeNumber % i === 0) {
			return false;
		}
	}

	return true;
}
