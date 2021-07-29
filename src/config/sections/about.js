import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function () {
	const aboutSection = document.querySelector('#about__section')
	


	window.addEventListener('scroll', changeBgColor);

	function changeBgColor(){
		let windowPageYpos = window.pageYOffset
		const n = windowPageYpos;
		const colorN = n / window.innerHeight * 255;		
		aboutSection.style.color = `rgb(${255 - colorN}, ${255 - colorN}, ${255 - colorN})`
		aboutSection.style.backgroundColor = `rgb(${colorN}, ${colorN}, ${colorN})`;		
	}

	
	
	
}