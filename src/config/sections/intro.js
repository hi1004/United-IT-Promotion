import { gsap, Power4, Back } from 'gsap';

export default function () {
	
	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;

	const _DURATION = 1;
	const logoAb = document.querySelectorAll(".ab");	
	const logoMain = document.querySelectorAll(".main");
	const logoSub = document.querySelectorAll(".sub");
	const introStage = document.querySelector(".intro-stage");



	function spreadReset(){
		let mainWidths = [0.115, 0.125, 0.10, 0.10, 0];
		let mainX = 0		
		let subWidths = [0.05, 0.035, 0.03, 0.04, 0.045, 0.05, 0.03, 0];
		let subX = 0		
		logoMain.forEach(function(item, i){				
			gsap.to(item, _DURATION , {
				top : (windowHeight-windowWidth*0.08)/2,
				left : windowWidth*(0.27+mainX),
				rotationX : 0, 
				rotationY : 0, 
				rotationZ : 0,
				ease : Back.easeInOut, 
				delay : i * .15
			})			
			mainX += mainWidths[i];
		})
		logoSub.forEach(function(item, i){
			gsap.to(item, _DURATION, {
				top : (windowHeight + windowWidth*0.14)/2,
				left : windowWidth*(0.35+subX),
				rotationX : 0, 
				rotationY : 0, 
				rotationZ : 0,
				ease : Back.easeInOut, 
				delay : i * .10
			})
			subX += subWidths[i];
		})
	}
	
	function spreadRandom(){
		logoAb.forEach(function(item){
			gsap.to(item,  _DURATION, {
				top : Math.random() * (windowHeight - 200) + 100,
				left : Math.random() * (windowWidth - 200) + 100, 
				rotationX : "random(-60,60)", //Math.random()*30 
				rotationY : "random(-60,60)", 
				rotationZ : "random(-90,90)",
				ease : Power4.easeInOut, 
				// delay : "random(0,.3)"
				})
		})
	}

	function spreadStart(){
		logoAb.forEach(function(item, i){
			gsap.set(item, {autoAlpha : 0})
			gsap.to(item, Math.random(), {
				top : Math.random() * (windowHeight - 200) + 100,
				left : Math.random() * (windowWidth - 200) + 100, 
				rotationX : "random(-60,60)", //Math.random()*30 
				rotationY : "random(-60,60)", 
				rotationZ : "random(-90,90)",
				autoAlpha : 1,
				ease : Power4.easeInOut, 
				delay : i*.14
				})
		})
	}

	function resize(){
		windowWidth = windowWidth = window.innerWidth;
		windowHeight = windowHeight = window.innerHeight;
		spreadReset();
	}

	function spreadSet1(){
		window.removeEventListener('click', spreadSet1);
		spreadRandom();
		setTimeout(spreadReset, _DURATION*2000);
		setTimeout(() => window.addEventListener('click', spreadSet1), _DURATION*3000);
	}

	function spreadSet2(){
		spreadStart();
		setTimeout(spreadReset, _DURATION*1000);
	}

	function disableClickEvent(){		
		if(isUsable(introStage, 0, 0.5)){
			window.addEventListener('click', spreadSet1);
		} else{
			window.removeEventListener('click', spreadSet1);
		}		
	}

	function isUsable(element, top=0.1, bottom=0.8){
		const elementItem = element.getBoundingClientRect();
		let distanceFromTop = -top * window.innerHeight;
		let distanceFromBottom = -bottom * window.innerHeight;
		return elementItem.top - window.innerHeight < distanceFromTop && elementItem.bottom - window.innerHeight > distanceFromBottom ? true : false;
	}
	
	window.addEventListener('resize', function(){
		resize();
	});	
	
	
	spreadSet2();
	setTimeout(() => window.addEventListener('click', spreadSet1), _DURATION*4000);	
	setTimeout(() => window.addEventListener('scroll',disableClickEvent), _DURATION*4000)

}
