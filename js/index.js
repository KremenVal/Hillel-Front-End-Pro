/* Start 13.1 */

let tr = Array.from(document.querySelectorAll('tr')),
	arrayObjects = [],
	summOfPrices = 0;
	
tr.reduce((mass, node) => {
	let td =  Array.from(node.querySelectorAll('td'));
	
	mass.push({
		name: td[0].textContent,
		price: td[1].textContent
	});

	return mass;
}, arrayObjects);

console.dir(arrayObjects);

/* End 13.1 */

/* Start 13.2 */

arrayObjects.forEach((cinema) => {
	if (cinema.name !== '' && cinema.price !== '') {
		console.log(cinema);
	};
})

/* End 13.2 */

/* Start 13.3 */

summOfPrices = arrayObjects.reduce((summ, cinema) => {
	let price = parseInt(cinema.price);

	return summ + (isNaN(price) ? 0 : price);
}, 0);

console.log(summOfPrices);

/* End 13.3 */
