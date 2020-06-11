/* Start 4.1.1 */

range = 3;

mass = getIntegerArray(range);
console.log('Array befor loop: ' + mass);

for (i = 0, loopRange = (range % 2 ? range - 1 : range); i < loopRange; i += 2) {
	temp = mass[i];
	mass[i] = mass[i + 1];
	mass[i + 1] = temp;
}

console.log('Array after loop: ' + mass);
console.log('------------------');

/* End 4.1.1 */

/* Start 4.1.2 */

range = 10;

mass = getIntegerArray(range);
average = Math.round(mass.reduce(function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
}) / range);

console.log('Array: ' + mass);
console.log('Average: ' + average);

for (i = 0; i < range; i++) {
	if (mass[i] > average) {
		console.log(mass[i]);
	}
}

console.log('------------------');

/* End 4.1.2 */

/* Start 4.1.3 */

a = getNumberFromUser('A');
b = getNumberFromUser('B');

if (a > b) {
	a += b;
	b = a - b;
	a -= b;
}

console.log(a, b);

for (i = 0; i < mass.length; i++) {
	if (mass[i] >= a && mass[i] <= b) {
		console.log('Index: ' + i);
	}
}

/* End 4.1.3 */

/* Start 4.1.4 */

console.log('Array befor loop: ' + mass);

for (i = 0; i < mass.length - 1; i++) {
	for (j = i + 1; j < mass.length; j++) {
		if (mass[i] == mass[j]) {
			mass.splice(j--, 1);
		}
	}
}

console.log('Array after loop: ' + mass);
console.log('------------------');

copyMass = getIntegerArray(range);
console.log('Array befor loop: ' + copyMass);

for (i = 0, tempMass = []; i < copyMass.length; i++) {
	if (tempMass.indexOf(copyMass[i]) == -1) {
		tempMass.push(copyMass[i]);
	}
}

copyMass = tempMass;

console.log('Array after loop: ' + copyMass);
console.log('------------------');

/* End 4.1.4 */

/* Start 4.2 */

mass = compareArray([1, 2, 3, 'hello', 4, 5], [1, 2, 3, true, 4, undefined, 6]);

console.log(mass);

/* End 4.2 */