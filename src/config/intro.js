import { TweenMax, Power4, Back } from 'gsap';

export default function () {
	let windowWidth, windowHeight;
	windowHeight = window.innerHeight;
	windowWidth = window.innerWidth;

	let logoMainWidth = 0
	let logoSubWidth = 0

	const _DURATION = 1;

	const introStage = document.querySelector('.intro-stage')
	const logoAb = document.querySelectorAll(".ab");	
	const logoMain = document.querySelectorAll(".main");
	const logoSub = document.querySelectorAll(".sub");
	const blackBg = document.querySelector(".black");

	function spreadReset(){
		logoMainWidth = windowWidth*0.15;
		logoSubWidth = windowWidth*0.05;
		logoMain.forEach(function(item, i){
			TweenMax.to(item,Math.random() *2 +1 , {
				top : windowHeight*0.5 - item.offsetHeight*0.5,
				left : logoMainWidth*i + windowWidth*0.19,
				rotationX : 0, 
				rotationY : 0, 
				rotationZ : 0,
				ease : Back.easeInOut, 
				delay : i * .15
			})
		})
		logoSub.forEach(function(item, i){
			TweenMax.to(item, _DURATION, {
				top : windowHeight*0.55 + item.offsetHeight*0.55,
				left : logoSubWidth*i + windowWidth*0.30,
				rotationX : 0, 
				rotationY : 0, 
				rotationZ : 0,
				ease : Back.easeInOut, 
				delay : i * .10
			})
		})
	}
	
	function spreadRandom(){
		logoAb.forEach(function(item){
			TweenMax.to(item,  _DURATION, {
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
			TweenMax.set(item, {autoAlpha : 0})
			TweenMax.to(item, Math.random() + 2, {
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
		windowHeight = window.innerHeight;
		windowWidth = window.innerWidth;
		spreadReset();
	}

	function spreadSet1(){
		spreadRandom();
		setTimeout(spreadReset, _DURATION*1000);
	}
	function spreadSet2(){
		spreadStart();
		setTimeout(spreadReset, _DURATION*3000);
	}
	
	window.addEventListener('resize', function(){
		resize();
	});
	
	introStage.addEventListener('click', spreadSet1)
	spreadSet2();
	setTimeout(() => {blackBg.classList.add("hidden-black")}, _DURATION*4000)
	
	


}
