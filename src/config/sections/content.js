import { gsap, Power4, Back } from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(scrollTo);
gsap.registerPlugin(ScrollTrigger);

export default function () {
	
	const contentContainer = document.querySelector('.content-container')
	const keywordItems = document.querySelectorAll('.keyword')


	keywordItems.forEach(function(item, i){
		gsap.to(item, {
			left: i*window.innerHeight*0.5 + window.innerHeight*0.1,
		})
		gsap.to(item, Math.random()*2.5 + 0.5, {
			scrollTrigger: {
				trigger: contentContainer
			},autoAlpha: 1,			
			ease : Back.easeInOut,
			scale:1.5
		})
	})
}