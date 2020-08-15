/* Start 18.1 */

async function getPromise() {
	let promise = new Promise((resolve, reject) => {
			setTimeout(() => resolve(getRandomInt(0, 100)), 1000)
		}),
		result = await promise;
	return result;
};

function afterFirstPromise(num){
	console.log(num);
};

function afterSecondPromise(num){
	console.log(num);
};

function afterThirdPromise(num){
	console.log(num);
};

function runAfter([
	afterFirstPromise,
	afterSecondPromise,
	afterThirdPromise
]){
	getPromise().then(afterFirstPromise);
	getPromise().then(afterSecondPromise);
	getPromise().then(afterThirdPromise);
};

runAfter([
	afterFirstPromise,
	afterSecondPromise,
	afterThirdPromise
]);

/* End 18.1 */
