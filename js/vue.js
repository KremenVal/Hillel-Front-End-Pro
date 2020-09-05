let app = new Vue({
	el: '#app',
	data: {	
		allList: [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12]
		]
	},
	methods: {
		transfer: function(event) {
			event.preventDefault();

			let curentFormUl = $(event.target).children().first()
				formNext = $(event.target).next(),
				formNextUl = formNext.children().first(),
				formPrev = $(event.target).prev(),
				formPrevUl = formPrev.children().first();

			if (formNext.length && $(event.target).children().last().prop('checked')) {
				formNextUl.prepend(curentFormUl.children().last());
			} else if (formPrev.length && !$(event.target).children().last().prop('checked')) {
				formPrevUl.prepend(curentFormUl.children().last());
			}
		}
	}
});
