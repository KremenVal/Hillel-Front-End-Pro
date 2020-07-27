/* Start 15.1 */

Array.prototype.__defineGetter__('render', function render() {
	let table = document.createElement("table"),
		tr = document.createElement("tr"),
		thKey = document.createElement("th");
		thValue = document.createElement("th");

	document.body.appendChild(table);
	thKey.textContent = 'Key';
	thValue.innerText = 'Value';
	tr.appendChild(thKey);
	table.appendChild(tr).appendChild(thValue);

	this.forEach(function(value, key) {
		let tr = document.createElement("tr"),
			tdKey = document.createElement("td"),
			tdValue = document.createElement("td");
		
		tdKey.innerText = key;
		tdValue.innerText = value;
		tr.appendChild(tdKey);
		table.appendChild(tr).appendChild(tdValue);
	});
});

let arr = [1, 2, 3];

console.log(arr.render);

/* End 15.1 */
