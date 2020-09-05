let app = new Vue({
	el: '#app',
	data: {
		heights: [],
		range: [],
		colors: [
			'red',
			'blue',
			'green',
			'black',
			'orange',
			'brown',
			'pink'
		]
	},
	mounted() {
		for (let i = 0; i < 7; i++) {
			this.heights.push(getRandomInt(100, 300));
			this.range.push(Math.round((this.heights[i] / 300) * 100));
		}
	},
	methods: {
		changeSize: function(event) {
			let box = $(event.target).prev(),
				height = 300 * ($(event.target).val() / 100);

			box.css('height', height);
		}
	}
});
