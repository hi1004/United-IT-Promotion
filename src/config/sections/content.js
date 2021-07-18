import { gsap, Power4, Back } from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(scrollTo);
gsap.registerPlugin(ScrollTrigger);

export default function () {
	
	const keywordContainer = document.querySelector('keyword-container')
	const keywordItems = document.querySelectorAll('.keyword')

	const keywordLefts = [0.25 , 0.5, 0.75, 0.33, 0.66]
	const keywordTops = [0.4, 0.25, 0.4, 0.6, 0.6]

	function mouseOutEvent(item, i){
		gsap.to(item, {
			y: 0,
			left: keywordLefts[i]*window.innerWidth - item.offsetWidth*0.5,
			top: keywordTops[i]*window.innerHeight,
			textShadow: '0px 0px 2px white',
			scale: 5,
			duration: 0.5
		})
	}


	keywordItems.forEach(function(item, i){		
		gsap.set(item, {
			left: keywordLefts[i]*window.innerWidth - item.offsetWidth*0.5,
			top: keywordTops[i]*window.innerHeight
		})
		gsap.to(item, {
			scrollTrigger: {
				trigger: keywordContainer,
				start: window.innerHeight*0.2
			},autoAlpha: 1,			
			ease: Back.easeInOut,
			textShadow: '0px 0px 2px white',
			scale: 5,
			duration: 1,
			delay: Math.random()
		})
		item.addEventListener('mouseover', () => {
			const t1 = gsap.timeline();
			t1.to(item, {
				rotation: 3,
				duration: 0.1
			})
			t1.to(item, {
				rotation: -3,
				duration: 0.1
			})
			t1.to(item, {
				rotation: 0,
				duration: 0.1
			})

			gsap.to(item, {		
				y: -window.innerWidth*0.01,		
				textShadow: '0px 0px 5px white',
				scale: 5,
				duration: 0.5
			})
		})
		item.addEventListener('mouseout', ()=>{
			mouseOutEvent(item, i);
		});

		item.addEventListener('click', () => {
			gsap.to(item, {
				scale: 7,
				duration: 0.3
			})
		})
	})
}