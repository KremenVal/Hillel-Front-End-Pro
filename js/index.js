let radius,
	height,
	v,
	s,
	line = '--------------------';

radius = getNumber('Radius');
height = getNumber('Height');

s = 2 * Math.PI * radius * height;
v = Math.PI * Math.pow(radius, 2) * height;


document.write(
	'<p>**************</p>'
	+ '<p>Обьем цилиндра с площадью основы ' + s + ', радиусом ' + radius + ' и высотой ' + height + ' равен:</p>'
	+ '<p>' + line + '</p>'
	+ '<p>V = ' + v + '</p>'
	+ '<p>' + line + '</p>'
	+ '<p>end</p>'
	);

function getNumber(nameVariable, variable) {
	variable = parseInt(prompt('Enter a number for the ' + nameVariable + ':', 5));

	while (isNaN(variable) || parseInt(variable) <= 0) {
		variable = parseInt(prompt('You entered no number. Need to enter a number greater than 0 for ' + nameVariable, 5));
	}

	return variable;
}