/* Start 18.1 */

let promise = (method, json) => {
	return new Promise((resolve, reject) => {
		let data = new XMLHttpRequest();

		data.open(method, json, true);
		data.send();

		data.addEventListener('readystatechange', () => {
			if (data.readyState === 4 && data.status < 400){
				resolve(JSON.parse(data.responseText));
			} else if (data.status >= 400) {
				reject();
			};
		});
	});
};

promise('GET', '../data1.json').then(
	(response) => {
		let mass1 = response.names;

		promise('GET', '../data2.json').then(
			(response) => {
				let mass2 = response.names;

				if (Array.isArray(mass1) && mass1.length) {
					if (Array.isArray(mass2) && mass2.length) {
						console.log(mass1.concat(mass2));
					} else {
						console.log(mass1);
					};
				} else if (Array.isArray(mass2) && mass2.length) {
					console.log(mass2);
				} else {
					return warrningMessage();
				};
			},
			() => {
				if (Array.isArray(mass1) && mass1.length) {
					console.log(mass1);
				} else {
					return warrningMessage();
				};
			}
		)
		.catch(
			(message) => {
				console.log(message);
			}
		)
	},
	() => {
		promise('GET', '../data2.json').then(
			(response) => {
				let mass2 = response.names;

				if (Array.isArray(mass2) && mass2.length) {
					console.log(mass2);
				} else {
					return warrningMessage();
				};
			},
			() => {return warrningMessage()}
		)
		.catch(
			(message) => {
				console.log(message);
			}
		);
	}
);

function warrningMessage() {
	return new Promise((resolve, reject) => {
		reject('You\'ve got some problem with your files or content of files.');
	});
}


/* End 18.1 */

/* Start 18.2 */

let result = new Promise((resolve, reject) => {
	let button = document.querySelector('.btn'),
		input = document.querySelector('.input'),
		array = [];

	input.addEventListener('input', function() {
		this.value = this.value.replace(/[^\d.]/g, '');
	});

	input.addEventListener('keydown', function(e) {
		if (e.keyCode === 13) {
			sendValue(array, input);
		};
	});

	button.addEventListener('click', function() {
		sendValue(array, input);
	});

	setTimeout(() => {
		document.querySelector('.task').style.display = 'none';
		
		if (array.length) {
			return resolve(array);
		} else {
			reject();
		};
	}, 10000);
});

result.then(
	(array) => {
		console.log(array);
	},
	() => {
		console.log('Empty array');
	}
);

function sendValue(array, input) {
	if (input.value) {
		array.push(input.value);
		input.value = '';
		input.focus();
	};
};

/* End 18.2 */
