/* Start 17.1 */

let xhr = new XMLHttpRequest();
xhr.open('GET', '../users.json', true);
xhr.send();

xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === 4){
		if(xhr.status <= 400){
			updateUsers(JSON.parse(xhr.responseText));
		} else {
			console.log(xhr.status, xhr.statusText);
		}
	}
});

function updateUsers(data) {
	let people = data.users,
		rating = data.rating,
		roles = data.roles;

	for (let user of people) {
		let card = document.createElement('div'),
			cardInfo = document.createElement('div'),
			cardInfoData = document.createElement('div'),
			dataImg = document.createElement('img'),
			userInfo = document.createElement('div'),
			pName = document.createElement('p'),
			bName = document.createElement('b'),
			pAge = document.createElement('p'),
			bAge = document.createElement('b'),
			cardInfoRole = document.createElement('div'),
			roleImg = document.createElement('img'),
			studentSpan = document.createElement('span');

		card.classList.add('card');
		cardInfo.classList.add('card__info');
		
		/* Atributes data__img */

		dataImg.classList.add('data__img');
		dataImg.setAttribute('src', user.icon);
		dataImg.setAttribute('alt', user.name);
		dataImg.setAttribute('height', '50');

		/* End data__img */
		
		/* Block user__info */
		
		userInfo.classList.add('user__info');
		pName.innerText = 'Name: ';
		bName.innerText = user.name;
		pName.append(bName);
		pAge.innerText = 'Age: ';
		bAge.innerText = user.age;
		pAge.append(bAge);
		userInfo.append(pName);
		userInfo.append(pAge);
		
		/* End user__info */

		/* Block card__info--data */

		cardInfoData.classList.add('card__info--data');
		cardInfoData.append(dataImg);
		cardInfoData.append(userInfo);

		/* End card__info--data */

		/* Block card__info--role */

		cardInfoRole.classList.add('card__info--role');
		roleImg.setAttribute('src', roles[user.position]);
		roleImg.setAttribute('alt', 'student');
		studentSpan.innerText = user.position;
		cardInfoRole.append(roleImg);
		cardInfoRole.append(studentSpan);

		/* End card__info--role */

		card.append(cardInfo);
		cardInfo.append(cardInfoData);
		cardInfo.append(cardInfoRole);

		if (user.courses) {
			let cardCourses = document.createElement('div'),
				courses = user.courses;

			cardCourses.classList.add('card__courses');
			
			for (let course in courses) {
				let p = document.createElement('p'),
					span = document.createElement('span');
					grade = getClosestRating(rating, courses[course]);

				p.classList.add('card__courses--course');
				p.classList.add(grade.split(' ').join('').toLowerCase());
				p.innerText = `${courses[course].name}: `;
				span.innerText = grade;
				p.append(span);
				cardCourses.append(p);
			}

			card.append(cardCourses);
		}

		document.body.append(card);
	}
}

function getClosestRating(rating, userRate) {
	let grade = '',
		currentClosestAverage = 0,
		closestRate = userRate.rating;

	for (let rate in rating) {
		currentClosestAverage = Math.abs(rating[rate] - userRate.rating);
		
		if (closestRate >= currentClosestAverage) {
			closestRate = currentClosestAverage;
			grade = rate;
		}
	}

	return grade;
}

/* End 17.1 */
