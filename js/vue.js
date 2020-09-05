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
			let ul = $(event.target).children().first();

			if ($(event.target).hasClass('need-to-do') && ul.children().length) {
				$('.done ul').prepend(ul.children().last());
			} else {
				$('.need-to-do ul').prepend(ul.children().last());
			}
		}
	}
});
