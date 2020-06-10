/* Start 3.1 */

range = 10;
massNumbers = new Array(range);
massPrimes = [];

for (index = indexPrime = 0, min = max = [0, 0]; index < range; index++) {
	massNumbers[index] = getRandomInt(-50, 50);

	if (isPrime(massNumbers[index])) {
		massPrimes[indexPrime++] = massNumbers[index];
	}

	if (!index) {
		min = max = [massNumbers[index], index];
	} else if (index && massNumbers[index] < min[0]) {
		min = [massNumbers[index], index];
	} else if (index && massNumbers[index] > max[0]) {
		max = [massNumbers[index], index];
	}
}

console.log('Array of numbers is: ' + massNumbers);
console.log('Array of primes is: ' + massPrimes);
console.log('Min number is: ' + min[0]);
console.log('Max number is: ' + max[0]);

/* End 3.1 */

/* Start 3.2 */

if (min[1] > max[1]) {
	range = min[1] - max[1];
	commonMass = new Array(range);

	for (i = min[1], index = 0; i >= max[1]; i--) {
		commonMass[index++] = massNumbers[i];
	}

	min[1] = commonMass.length - 1;
	max[1] = 0;
} else {
	range = max[1] - min[1];
	commonMass = new Array(max[1] - min[1]);

	for (i = min[1], index = 0; i <= max[1]; i++) {
		commonMass[index++] = massNumbers[i];
	}

	max[1] = commonMass.length - 1;
	min[1] = 0;
}

console.log('Array of numbers is: ' + commonMass);
console.log('Min number is: ' + min[0]);
console.log('Max number is: ' + max[0]);
// console.log('NewMin number is: ' + newMin[0]);
// console.log('NewMax number is: ' + newMax[0]);

/* End 3.2 */

/* Start 3.3 */

/* For array with only number */

// commonMass[min[1]] += commonMass[max[1]];
// commonMass[max[1]] = commonMass[min[1]] - commonMass[max[1]];
// commonMass[min[1]] -= commonMass[max[1]];

// console.log('Array of numbers is: ' + commonMass);

/* For any array */

// temp = commonMass[min[1]];
// commonMass[min[1]] = commonMass[max[1]];
// commonMass[max[1]] = temp;

// console.log('Array of numbers is: ' + commonMass);

/* End 3.3 */

/* Start 3.4 */

/* For array with only number */

// for (start = 0, end = commonMass.length - 1, halfRange = (range > 2 ? Math.floor(range / 2) : 1); start < halfRange; start++, end--) {
// 	commonMass[start] += commonMass[end];
// 	commonMass[end] = commonMass[start] - commonMass[end];
// 	commonMass[start] -= commonMass[end];
// }

// console.log('Revers array is: ' + commonMass);

/* For any array */

// for (start = 0, end = commonMass.length - 1, halfRange = (range > 2 ? Math.floor(range / 2) : 1); start < halfRange; start++, end--) {
// 	temp = commonMass[start];
// 	commonMass[start] = commonMass[end];
// 	commonMass[end] = temp;
// }

// console.log('Revers array is: ' + commonMass);


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
