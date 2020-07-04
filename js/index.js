/* Start 9.1 */

mathOper = {
	x: 12,
	y: 3,
	sign: '/'
};

function SuperMath() {
};

SuperMath.prototype.input = function(msg, obj) {		/* Asking for a new parametrs */
	alert(msg);
	obj.x = prompt('Enter X:', 5);
	obj.y = prompt('Enter Y:', 5);
	obj.sign = prompt('Enter Sign:', '+');
};

SuperMath.prototype.checkData = function(obj) {			/* Cheking for a valid parametrs */
	let msg = 'flag';

	while (msg != '') {
		if (isNaN(obj.x = parseInt(obj.x))) {
			msg = 'X must be a number! ';
		} else if (isNaN(obj.y = parseInt(obj.y))) {
			msg = 'Y must be a number! ';
		} else if (['+', '-', '/', '%', '*'].indexOf(obj.sign) == -1) {
			msg = 'You need wrtie correct math operation! ';
		} else if ((obj.sign == '/' || obj.sign == '%') && !obj.y) {
			msg = 'Cannot divide by zero!\n' + `${obj.x + obj.sign + obj.y}\n`;
		} else {
			msg = '';
		}
	
		if (msg != '') {
			this.input(msg + 'Write new data.', obj);
		}
	}
}

SuperMath.prototype.mathOperation = function(x, y, sign) {		/* Performing math operations */
	if (sign == '+') {
		return x + y;
	} else if (sign == '-') {
		return x - y;
	} else if (sign == '/') {
		return x / y;
	} else if (sign == '%') {
		return x % y;
	} else {
		return x * y;
	}
}

SuperMath.prototype.check = function(obj) {
	this.checkData(obj);
	
	answer = prompt('Are you sure you want to perform this math operation? Write yes if you want to continue or no to change data.\n' + obj.x + obj.sign + obj.y, 'Yes');

	while(answer.toLowerCase() != 'yes' && answer.toLowerCase() != 'no') {
		answer = prompt('Write yes if you want to continue or no to change data.\n' + obj.x + obj.sign + obj.y, 'Yes');
	}
	
	if (answer.toLowerCase() == 'yes') {
		console.log(this.mathOperation(obj.x, obj.y, obj.sign));
	} else {
		this.input('Write new data.', obj);
		this.check(obj);
	}
};


p = new SuperMath();
p.check(mathOper);

/* End 9.1 */
