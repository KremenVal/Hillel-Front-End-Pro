/* Start 5.1 */

var firstMass = getIntegerArray(),
	secondMass = getIntegerArray(),
	thirdMass = getIntegerArray();

console.log(firstMass, secondMass, thirdMass);
console.log(getMaxs(firstMass, secondMass, thirdMass));

function getMaxs() {
	for (var i = 0, result = ''; i < arguments.length; i++) {
		result += maxArray(arguments[i]) + (i != arguments.length - 1 ? '; ' : '');
	}
	
	return result;
}

/* End 5.1 */

/* Start 5.2 */

// console.log(doFunction(2, 3, pow));

// function doFunction(firstNumber = 5, secondNumber = 5, func) {
// 	return func(firstNumber, secondNumber);
// }

// function pow(num1, num2) {
// 	return num1 ** num2;
// }

/* End 5.2 */

/* Start 5.3 */

// var mass = getIntegerArray(),
// 	copyMass = copyArray(mass);

// console.log(mass, copyMass);

/* End 5.3 */

/* Start 5.4 */

// var mass = getIntegerArray(),
// 	copyMass = copy(mass, function(num){
// 		return num * 10;
// 	});

// function copy(mass = [], func) {
// 	var returnArray = [];

// 	for (var i = 0; i < mass.length; i++) {
// 		returnArray.push(typeof func !== 'function' ? mass[i] : func(mass[i]));
// 	}

// 	return returnArray;
// }

// console.log(mass, copyMass);

/* End 5.4 */
