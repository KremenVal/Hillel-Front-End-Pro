/* Start 6.1 */

function f(a = 2, b = 3, c) {
	return (typeof c === 'function' ? c(sum(a, b)) : sum(a, b));

	function sum(a, b) {
		return a + b;
	}
}

console.log(f(5, 5, 'kek'));

console.log(f(5, 5, function(a) {
	return Math.pow(a, 2);
}));

/* End 6.1 */
