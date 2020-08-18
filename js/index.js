/* Start 20.1 */

let response = async function(url) {
	const response = await fetch(url);
	const json = await response.json();

	return json;
	},
	json = response('https://raw.githubusercontent.com/brightestsirius/tesla/master/tesla.json');

json.then(
		(data) => {
			let slideshow = $(".slideshow-container"),
				colorPicker = $(".color-picker");
			
			for (let tesla in data) {
				let text = tesla.replace('-', ' ').split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '),
					div = `<div class="mySlides fade" data-id-car="${colorPicker[0].childElementCount + 1}"  ${!colorPicker[0].childElementCount ? 'style="display: block"' : ''}>
							<img src="${data[tesla]}" class="car" alt="tesla roadster ${text}">
							<div class="text">${text}</div>
							</div>`,
					span = `<span class="dot ${tesla}${!colorPicker[0].childElementCount ? ' active' : ''}" data-id-color="${colorPicker[0].childElementCount + 1}"></span>`;
				
				slideshow.append(div);
				colorPicker.append(span);
			}
		},
		() => {
			return reject;
		}
	).then(
		() => {
			$(".color-picker").click(function(event){
				let element = $(event.target);
			
				if (!element.hasClass('active') && element.hasClass('dot')) {
					let current = $('[class~="active"]');
			
					current.toggleClass('active');
					$(`[data-id-car=${current.data('idColor')}]`).css('display', 'none');
					$(`[data-id-car=${element.data('idColor')}]`).css('display', 'block');
					element.toggleClass('active');
				}
			});
		},
		() => console.log('Something wrong!')
	);

/* End 20.1 */
