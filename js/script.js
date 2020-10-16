var drumPads = document.querySelectorAll('.drum').length;


for (var i = 0; i < drumPads; i++) {
	document.querySelectorAll('.drum')[i].addEventListener('touchstart', function() {
			var padInner = this.innerHTML;

			playSound(padInner);
			buttonFlash(padInner);
	});
}

document.addEventListener('keydown', function(event){

	if (event.repeat) return;

	playSound(event.key);
	buttonFlash(event.key);

});

function playSound(key) {

	switch(key) {
				case 'q':
					var tom1 = new Howl({src: ['assets/sounds/tom1.mp3']});
					tom1.play();
					/*var tom1 = new Audio('assets/sounds/tom1.mp3');
					tom1.play();*/
					break;

				case 'w':
					var tom2 = new Howl({src: ['assets/sounds/tom2.mp3']});
					tom2.play();
					/*var tom2 = new Audio('assets/sounds/tom2.mp3');
					tom2.play();*/
					break;

				case 'a':
					var hiHat = new Howl({src: ['assets/sounds/hihat.mp3']});
					hiHat.play();
					/*var hiHat = new Audio('assets/sounds/hihat.mp3');
					hiHat.play();*/
					break;

				case 's':
					var crash = new Howl({src: ['assets/sounds/crash.mp3']});
					crash.play();
					/*var crash = new Audio('assets/sounds/crash.mp3');
					crash.play();*/
					break;

				case 'm':
					var kick = new Howl({src: ['assets/sounds/kick.mp3']});
					kick.play();
					/*var kick = new Audio('assets/sounds/kick.mp3');
					kick.play();*/
					break;

				case 'l':
					var snare = new Howl({src: ['assets/sounds/snare.mp3']});
					snare.play();
					/*var snare = new Audio('assets/sounds/snare.mp3');
					snare.play();*/
					break;
			}
}

function buttonFlash(currentKey) {

	var activePad = document.querySelector('.' + currentKey);

	activePad.classList.add('pressed');

	setTimeout(function(){
		activePad.classList.remove('pressed');
	}, 200);
}


