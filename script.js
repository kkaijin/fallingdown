let score = document.querySelector(".score")
let ground = document.querySelector(".ground")
let word = document.querySelector(".point")
let lose = document.querySelector(".lose")
let win = document.querySelector(".win")
let btn = document.querySelector(".btn")
win.style.display = "none"
lose.style.display = "none"
let point = 0
let miss = 0
btn.onclick = function() {
			let randomNum = function () {
			let random = Math.random() * 1200;
			let round = Math.round(random);
			return round;
		}
		 



		for(let i=0; i<10; i=i+1) {
			let div = document.createElement("div");
			document.body.appendChild(div)
			div.classList.add("sphere");
			div.style.left = randomNum() + "px"
		}

		let spheres = document.querySelectorAll(".sphere");

		let num = 0;
		let idDiv = 0;

		let falling = function() {
			num = num + 150
			spheres[idDiv].style.top = num + 'px'

			if(num>=1150){
				num = 0;
				console.log("дошел")
				spheres[idDiv].remove();
				idDiv = idDiv + 1;
				miss = miss + 1
			}

			

			if (miss>=3) {
				console.log("игра стоп");
				stopGame();
				
				ground.style.display = "none"
				score.style.display = "none"
				word.style.display = "none"
				btn.style.display = "none"
				lose.style.display = "block"
			}


		}

		let myInt = setInterval(falling, 200);

		let stopGame = function() {
			clearInterval(myInt);
		}

		for(let i=0; i<10; i=i+1) {
			spheres[i].onclick = function() {
				num = 0
				spheres[i].remove();
				idDiv = idDiv + 1

				if (idDiv>9) {
					console.log("игра стоп");
					stopGame();

				}

				point = point + 1
				score.innerHTML = point

				if (point>=7) {
					
					ground.style.display = "none"
					score.style.display = "none"
					word.style.display = "none"
					btn.style.display = "none"
					win.style.display = "block"
					stopGame();

				}

			}
		}
}