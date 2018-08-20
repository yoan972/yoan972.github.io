import './css/style.scss'

let burger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let menuText = document.querySelector('.hamburger-text');

burger.addEventListener('click', function () {
	burger.classList.toggle('is-active');
	menu.classList.toggle('active');
	if(menuText.textContent == "menu") {
		menuText.innerHTML = "close";
	}else {
		menuText.innerHTML = "menu";

	}
	document.body.classList.toggle('lock-screen');
	
})