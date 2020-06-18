/* Start 6.1 */

// function f(a = 2, b = 3, c) {
// 	return (typeof c === 'function' ? c(sum(a, b)) : sum(a, b));

// 	function sum(a, b) {
// 		return a + b;
// 	}
// }

// console.log(f(5, 5, 'kek'));

// console.log(f(5, 5, function(a) {
// 	return Math.pow(a, 2);
// }));

/* End 6.1 */

/* Start 6.2 */

match = "hello";

array = ["1234hello", "hellohd;lfmg", "45yu89egrhellowegojih", "dfhghello", ",bnsdklb"];

kek = array.map(function(item) {
	return item.indexOf(match);
})
.filter(item => item > -1)
.join(', ');

console.log(kek);

/* End 6.2 */
