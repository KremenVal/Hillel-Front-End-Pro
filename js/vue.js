let app = new Vue({
	el: '#app',
	data: {
		url: 'https://api.chucknorris.io/jokes/',
		generator: 'random',
		searchValue: '',
		joke: null,
		jokes: [],
		savedJokes: [],
		categories: [],
		categoryApi: null
	},
	async mounted() {
		if (localStorage.jokes) {
		  this.savedJokes = JSON.parse(localStorage.jokes);
		}

		await axios
			.get('https://api.chucknorris.io/jokes/categories')
			.then(response => {
				this.categories = response.data;
			});
	},
	updated() {
		$('.my-favourite > div').css('height', $(document).height());
		$('.my-favourite').css('height', $(document).height());
	},
	methods: {
		getJokes: async function(event) {
			event.preventDefault();

			await axios
				.get(await this.setUrl())
				.then(response => {
					this.joke = response.data;
				});
			
			if (this.joke.result) {
				for (let value of this.joke.result) {
					await this.jokes.push(value);
				}
			} else {
				await this.jokes.push(this.joke);
			}
		},
		getGenerator: function(event) {
			this.generator = $(event.target).val();

			if ($(event.target).attr('id') === 'search' && $(event.target).prop('checked')) {
				$('input[name=search-radio]').show().focus();
			} else {
				$('input[name=search-radio]').hide();
				this.searchValue = '';
			}

			if ($(event.target).attr('id') === 'from-categories' && $(event.target).prop('checked')) {
				$('input[name="category"]').attr('disabled', false);
				$('input[name="category"]').first().attr('checked', true);
				$('.categories label span').first().css('color', '#000');
				this.category = $('input[name="category"]').first().val();
			} else if ($(event.target).attr('id') !== 'from-categories') {
				$('input[type="category"]').attr('disabled', true);
				$('.categories label span').css('color', '#ABABAB');
				this.category = null;
			}
		},
		setUrl: function() {
			if (this.generator === 'random') {
				return this.url + this.generator;
			} else if (this.generator === 'from-categories') {
				return this.url + `random/?category=${this.category}`;
			} else if (this.generator === 'search') {
				return this.url + `search?query=${this.searchValue}`;
			}
		},
		addFavourite: async function(event) {
			this.savedJokes.push(this.jokes[event.target.dataset.id]);
			localStorage.setItem('jokes', JSON.stringify(this.savedJokes));
			$(event.target).attr('src', '../images/heart.png');
		},
		deleteJoke: async function(event) {
			this.savedJokes.splice(event.target.dataset.saveId, 1);
			localStorage.setItem('jokes', JSON.stringify(this.savedJokes));
		},
		changeCategory: function(event) {
			$('.categories label span').css('color', '#ABABAB');

			if ($(event.target).prop('checked')) {
				$(event.target).prev().css('color', '#000');
				this.category = $(event.target).val();
			}
		},
		headerMenu: function(event) {
			$(event.target).attr('src') == '../images/favourite-open.png' ? $(event.target).attr('src', '../images/favourite-close.png') : $(event.target).attr('src', '../images/favourite-open.png');
	
			$('.my-favourite').toggle('slide', { direction: 'right' }, 500);
			
			if ($(window).width() < 768) {
				$(event.target).attr('src') == '../images/favourite-close.png' ? $('.header-content > span').fadeTo(100, 0) : $('.header-content > span').fadeTo(100, 1);
			}
		},
		closeMenu: function(event) {
			if ($(window).width() < 1025 && $(event.target).hasClass('my-favourite')) {
				$('.my-favourite').toggle('slide', { direction: 'right' }, 500);
			};
		}
	}
});