/* Start 10.1 */

let lastLi = document.querySelectorAll('li:last-of-type');

for (let li of lastLi) {
	setTimeout(function() {
		li.classList.add('last');
	}, 2000);
}

/* Сделал 2 варианта, т.к. немного не понял какой из них подходит) */

function setFirstItemClassName(level = 1) {
	if (level < 1 || level > 3) {
		return false;
	} else {
		let patern = 'document.querySelector(\'.root\')' + '.children[0]'.repeat(level) + '.classList.add(\'first-item\')';

		setTimeout(function() {
			eval(patern);
		}, 2000);
	}
}

// function setFirstItemClassName(level = 1) {
// 	if (level < 1 || level > 3) {
// 		return false;
// 	} else {
// 		for (let i = 0, children = document.querySelector('.root').children.length; i < children; i++) {
// 			let patern = 'document.querySelector(\'.root\')' + `.children[${i}]` + '.children[0]'.repeat(level - 1)
// 							+ '.classList.add(\'first-item\')';
//
// 			setTimeout(function() {
// 				eval(patern);
// 			}, 2000);
// 		}
// 	}
// }

setFirstItemClassName(2);

/* End 10.1 */
