/* Start 10.1 */

let lastLi = document.querySelectorAll('ul > li > ul > li:last-of-type');

for (let li of lastLi) {
	setTimeout(function() {
		li.classList.add('last');
	}, 2000);
}

function setFirstItemClassName(level = 1) {
	if (level < 1 || level > 3) {
		return false;
	} else {
		let patern = 'document.querySelectorAll(\'.root\')[0]' + '.children[0]'.repeat(level) + '.classList.add(\'first-item\')';

		setTimeout(function() {
			eval(patern);
		}, 2000);
	}
}

setFirstItemClassName(3);

/* End 10.1 */
