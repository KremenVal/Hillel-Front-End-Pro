/* Start 7.1 */

let people = [],
	samePeople = [],
	names = ['Max', 'Max', 'Denis', 'Max', 'Alex', 'Denis'],
	oldestPerson = {},
	averageAge = closestAverage = summAge = 0;

for (let i = 0; i < names.length; i++) {		/* Creating new array which include objects of people and finding the oldes person */
	people.push(getPerson(names[i], getRandomInt(1, 50), getRandomInt(51, 110)));

	summAge += people[i].getAge(); 

	if (!i) {
		oldestPerson = people[i];
	} else if (oldestPerson.getAge() < people[i].getAge()) {
		oldestPerson = people[i];
	}
}

closestAverage = Math.abs(summAge / people.length - oldestPerson.getAge());

for (let i = currentClosestAverage = 0; i < people.length; i++) {		/* Finding closest age to average age */
	currentClosestAverage = Math.abs(summAge / people.length - people[i].getAge());

	if (currentClosestAverage < closestAverage) {
		closestAverage = currentClosestAverage;
		averageAge = people[i].getAge();
	}
}

copyPeople = copyArray(people);

for (let i = 0; i < copyPeople.length - 1; i++) {			/* Finding people with the same name */
	for (let j = i + 1, count = 0; j < copyPeople.length; j++) {
		if (copyPeople[j].getName() === copyPeople[i].getName() && !count++) {
			samePeople.push(copyPeople[i], copyPeople[j]);
			copyPeople.splice(j, 1);
		} else if (copyPeople[j].getName() === copyPeople[i].getName()) {
			samePeople.push(copyPeople[j]);
			copyPeople.splice(j, 1);
		}
	}
}

console.log(people);
console.log('Average age is: ' + averageAge);
console.log(oldestPerson);
console.log(samePeople);

/* End 7.1 */

function getPerson(name = 'Anton', from = 1, to = 110) {
	return {
		name: name,
		age: getRandomInt(from, to),
		getName() {
			return this.name;
		},
		getAge() {
			return this.age;
		}
	}
}
