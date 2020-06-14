/* Start 5.1 */

firstMass = getIntegerArray();
secondMass = getIntegerArray();
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
