/* Start 15.3 */

let obj = {
		x: 10,
		y: 20,
		p: 15
	},
	operations = [
		'+',
		'-',
		'*',
		'/',
		'%'
	];

Object.defineProperty(obj, 'model', {
	set: function(obj) {
		for (let key in obj) {
			if (this[key] && operations.indexOf(obj[key].operation) > -1) {
				this[key] = eval(`${this[key]} ${obj[key].operation} ${obj[key].value};`);
			} else if (!this[key] && operations.indexOf(obj[key].operation) > -1) {
				this[key] = obj[key].value;
			}
		};
	}
});

obj.model = {
	x: {
		value: 33,
		operation: '*'
	},
	z: {
		value: 75,
		operation: '+'
	},
	p: {
		value: 4,
		operation: '%'
	}
};

console.log(obj);

/* End 15.3 */
