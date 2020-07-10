/* Start 11.1 */

let box = document.querySelector('.box'),
	bams = document.querySelector('.bams'),
	monitorParams = document.documentElement,
	horizontalMovement = 0,
	vertiaclMovement = 0
	step = getStep('step');


window.onkeydown = function(event) {
	if (!box.classList.contains('animation')) {
		if (event.keyCode === 37) {							/* Moving left */
			box.style.left = (horizontalMovement -= step + (box.getBoundingClientRect().left
				- Math.floor(box.getBoundingClientRect().left))) + 'px';
			
			if (box.getBoundingClientRect().left < 1) {
				box.style.left = (horizontalMovement -= box.getBoundingClientRect().left) + 'px';
				
				setEffects('left', 'horizontalMovement', '+');
			}
		} else if (event.keyCode === 38) {					/* Moving top */
			box.style.top = (vertiaclMovement -= step + (box.getBoundingClientRect().top
				- Math.floor(box.getBoundingClientRect().top))) + 'px';
			
			if (box.getBoundingClientRect().top < 1) {
				box.style.top = (vertiaclMovement -= box.getBoundingClientRect().top) + 'px';

				setEffects('top', 'vertiaclMovement', '+');
			}
		} else if (event.keyCode === 39) {					/* Moving right */
			box.style.left = (horizontalMovement += step + (box.getBoundingClientRect().right
				- Math.floor(box.getBoundingClientRect().right))) + 'px';

			if (box.getBoundingClientRect().right > monitorParams.clientWidth - 1) {
				box.style.left = (horizontalMovement += monitorParams.clientWidth
					- box.getBoundingClientRect().right) + 'px';

				setEffects('left', 'horizontalMovement', '-');
			}
		} else if (event.keyCode === 40) {					/* Moving bottom */
			box.style.top = (vertiaclMovement += step) + 'px';

			if (box.getBoundingClientRect().bottom > monitorParams.clientHeight - 1) {
				box.style.top = (vertiaclMovement += monitorParams.clientHeight
					- box.getBoundingClientRect().bottom - 0.5) + 'px';

				setEffects('top', 'vertiaclMovement', '-');
			}
		
		}
	}
}

function setEffects(position, movement, sign) {
	setTimeout(function(){
		bams.style.opacity = 1;
		bams.classList.add('animation-text');
		box.classList.add('animation');
		
		setTimeout(function() {
			eval(`box.style.${position} = (${movement} ${sign}= ${step} * 2) + 'px'`);
		}, 100);

		setTimeout(function() {
			bams.style.opacity = 0;
			bams.classList.remove('animation-text');
			box.classList.remove('animation');
		}, 1000);
	});
}

function getStep(nameVariable) {
	let variable = prompt('Enter a number for the ' + nameVariable + ':', 5);

	while (!isNumber(variable) || parseInt(variable) < 1 || parseInt(variable) > monitorParams.clientHeight / 3) {
		variable = prompt(`You entered no number or number less than 1 or bigger than ${monitorParams.clientHeight / 3}. Need to enter a valid number for ` + nameVariable, 5);
	}

	return parseInt(variable);
}

/* End 11.1 */
