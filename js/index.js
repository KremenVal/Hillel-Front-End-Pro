/* Start 2.1 */

// x = getNumber('x');
// y = getNumber('y');

// for (start = x; start <= y; start++) {
// 	if (!(start % 2)) {
// 		console.log('Sqrt of ' + start + ' is: ' + Math.pow(start, 2));
// 	}
// }

// function getNumber(nameVariable) {
// 	variable = parseInt(prompt('Enter a number for varible \'' + nameVariable + '\':', 5), 10);

// 	if (nameVariable == 'y') {
// 		while (isNaN(variable) || variable - x < 10) {
// 			variable = parseInt(prompt('You entered not a number or number of variable \''
// 			+ nameVariable + '\' should be larger than \'x\' ( x = ' + x + ') by 10, enter a number:', 5), 10);
// 		}
// 	} else {
// 		while (isNaN(variable)) {
// 			variable = parseInt(prompt('You entered not a number for varible \''
// 			+ nameVariable + '\', enter a number:', 5), 10);
// 		}
// 	}

// 	return variable;
// }

/* End 2.1 */

/* Start 2.2 */

// resultPrime = isPrime();

// if (resultPrime[1]) {
// 	console.log(resultPrime[0] + ' is a prime number!');
// } else {
// 	console.log(resultPrime[0] + ' isn\'t a prime number!');
// }

// function isPrime() {
// 	primeNumber = parseInt(prompt('Enter a prime number:', 5), 10);

// 	while (isNaN(primeNumber)) {
// 		primeNumber = parseInt(prompt('You entered not a number, enter a number:', 5), 10);
// 	}

// 	if (primeNumber == 2) {
// 		return [primeNumber, true];
// 	} else if (primeNumber < 2 || primeNumber % 2 === 0) {
// 		return [primeNumber, false];
// 	}

// 	for (i = 3, sqrt = Math.sqrt(primeNumber); i <= sqrt; i += 2) {
// 		if (primeNumber % i === 0) {
// 			return [primeNumber, false];
// 		}
// 	}

// 	return [primeNumber, true];
// }

/* End 2.2 */

/* Start 2.3 (Сделал 2-мя методами с разной скоростью работы) */ 

// console.time('Recurtion time');
// console.log('Summ of primes due to recursion is: ' + primeRecursion(2, 3));
// console.timeEnd('Recurtion time');

// function primeRecursion(summ, number)
// {
// 	if (number < 2 || number % 2 === 0) {
// 		return primeRecursion(summ, number += 1);
// 	}

// 	for (i = 3, sqrt = Math.sqrt(number); i <= sqrt; i += 2) {
// 		if (number % i === 0) {
// 			return primeRecursion(summ, number += 1);
// 		}
// 	}

// 	if (number >= 250) {
// 		return summ;
// 	} else {
// 		return primeRecursion(summ += number, number += 1);
// 	}
// };

// console.time('Cycle time');

// for (i = 2, summPrime = 0; i <= 250; i++) {
// 	for (j = 2, prime = true; j < i; j++) {
// 		if (i % j == 0) {
// 			prime = false;
// 			break;
// 		}
// 	}

// 	if (prime) {
// 		summPrime += i;
// 	}
// }

// console.log('Summ of primes due to cycle is: ' + summPrime);
// console.timeEnd('Cycle time');

/* End 2.3 */

/* Start 2.4 */

// numberFibonacci = parseInt(prompt('Enter a number bigger than 0:', 5), 10);

// while (isNaN(numberFibonacci) || numberFibonacci < 0) {
// 	numberFibonacci = parseInt(prompt('You entered not a number or number less than 0, enter a number:', 5), 10);
// }

// console.log('Fibonacci number for number ' + numberFibonacci + ' is: ' + fibonacci(numberFibonacci));

// function fibonacci(number) {
// 	if (number == 0) {
// 		return number;
// 	}

// 	firtsPart = secondPart = 1;

// 	for (i = 3; i <= number; i++) {
// 		temp = firtsPart + secondPart;
// 		firtsPart = secondPart;
// 		secondPart = temp;
// 	}

// 	return secondPart;
// };

/* End 2.4 */

/* Start 2.5 */

// a = getNumberTask5('a');
// b = getNumberTask5('b');
// h = getNumberTask5('h');

// for (step = a, result = 0; step < b; step += h) {
// 	result += factorial(step);
// }

// console.log('Summ of factorials: ' + result);

// function factorial(number) {
// 	for (index = 1, summFactorial = 1; index <= number; index++) {
// 		summFactorial *= index;
// 	}

// 	return summFactorial;
// }

// function getNumberTask5(nameVariable) {
// 	variable = parseInt(prompt('Enter a number for varible \'' + nameVariable + '\':', 5), 10);

// 	if (nameVariable == 'b') {
// 		while (isNaN(variable) || variable - a < 5) {
// 			variable = parseInt(prompt('You entered not a number or number of variable \''
// 			+ nameVariable + '\' should be larger than \'a\' (a = ' + a + ') by 5, enter a number:', 5), 10);
// 		}
// 	} else if (nameVariable == 'a') {
// 		while (isNaN(variable)) {
// 			variable = parseInt(prompt('You entered not a number for varible \''
// 			+ nameVariable + '\', enter a number:', 5), 10);
// 		}
// 	} else {
// 		while (isNaN(variable) || variable < 1) {
// 			variable = parseInt(prompt('You entered not a number for varible \''
// 			+ nameVariable + '\' or number less than 1, enter a number:', 5), 10);
// 		}
// 	}

// 	return variable;
// }

/* End 2.5 */

/* Start 2.6 */

// document.write('<table><tr><td><strong>№</strong></td><td><strong>Even number</strong></td></tr>');
// count = 1;

// for (row = 1; row <= 100; row++) {
// 	if (row % 2 == 0) {
// 		document.write('<tr><td>' + count + '</td><td>' + row + '</td></tr>');
// 		count++;
// 	}
// }

// document.write('</table>');

/* End 2.6 */