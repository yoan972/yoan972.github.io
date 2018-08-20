let items = document.querySelectorAll('.js-fadeIn__item');
let h1 = document.querySelector('.js-fade__text');

function fadeInProject() {
		items.forEach(item => {
			let bottomOfItem = item.offsetTop + item.scrollHeight;
			let bottomOfWindow = window.scrollY + window.innerHeight;
			if( bottomOfWindow > bottomOfItem ){
		                item.style.transform = "translateY(0px)";
		                item.style.opacity = '1';
		                    
		            }
		})
	}	

function fadeOnScroll() {
	if (window.scrollY < 250) {
		let opacityValue = 1 - window.scrollY / 250 ;
		h1.style.opacity = opacityValue;
	}

}

document.addEventListener('DOMContentLoaded', function () {
	fadeInProject();
})

document.addEventListener('scroll', function () {
	fadeInProject();
	fadeOnScroll();
});    


	    
	    


	
	
	
	




