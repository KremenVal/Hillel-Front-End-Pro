/* Start 14.1 */

let employee = {
}

Object.defineProperty(employee, 'getFirstName', {
	value: function() {
		if (!this.firstName) {
			this.firstName = prompt('Please, enter the first name: ', 'Max');
		}
	
		return this.firstName;
	},
});


Object.defineProperty(employee, 'getLastName', {
	value: function() {
		if (!this.lastName) {
			this.lastName = prompt('Please, enter the last  name: ', 'Trant');
		};
	
		return this.lastName;
	},
});

Object.defineProperty(employee, 'getUser', {
	value: function() {
		return this.getFirstName() + " " + this.getLastName();
	},
	writable: true,
});

Object.defineProperty(employee, 'renderUser', {
	value: function() {
		let ul = document.createElement('ul');

		for (let key in this) {
			let li = document.createElement('li');

			li.innerText = this[key];
			ul.appendChild(li);
		}

		document.body.appendChild(ul);
	}
});

let User = Object.create(employee);

User.getUser();
User.renderUser();

/* End 14.1 */
