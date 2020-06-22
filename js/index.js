/* Start 7.1 */

let obj = {
	x: 10,
	y: 20,
	inner: {
		x: 20,
		z: 30
	},
	foo2: {
		k: 23,
		p: 13
	}
}

let newObj1 = convert(obj);
console.log(newObj1);

function convert(obj) {
	if (typeof obj !== 'object') {
		return {};
	}

	let newObj = {};

	concatObject(newObj, obj);
	
	return newObj;
}

/* End 7.1 */

/* Start 7.2 and 7.3 */

let newObj2 = assignObjects(
		{
			x: 10,
			y: 20 
		},
		{
			z: 30
		}
	),
	newObj3 = assignObjects(
		{
			x: 10
		},
		{
			x: 20,
			y: 30
		}
	);

console.log(newObj2);
console.log(newObj3);

function assignObjects() {
	let newObj = {};

	for (let i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] !== 'object') {
			continue;
		} else {
			concatObject(newObj, arguments[i]);
		}
	}

	return newObj;
};

/* End 7.2 and 7.3 */

function concatObject(newObj, obj) {
	for (let i in obj) {
		if (typeof obj[i] === 'object') {
			for (let j in obj[i]) {
				newObj[j] = obj[i][j];
			}
		} else {
			newObj[i] = obj[i];
		}
	}
}
