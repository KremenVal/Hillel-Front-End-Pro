let app = new Vue({
	el: '#app',
	data: {	

	},
	methods: {
		transfer: function(event) {
			event.preventDefault();
			let ul = $(event.target).children().first();

			if ($(event.target).hasClass('need-to-do') && ul.children().length) {
				$('.done ul').append(ul.children().last());
			} else {
				$('.need-to-do ul').append(ul.children().last());
			}
		}
	}
});
