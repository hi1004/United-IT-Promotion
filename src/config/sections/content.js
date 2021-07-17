import { gsap, Power4, Back } from 'gsap';

export default function () {
	
	const contentContainer = document.querySelector('.content-container')
	const keywordItems = document.querySelectorAll('.keyword')
	
	function isUsable(element, top=0.1, bottom=0.8){
		const elementItem = element.getBoundingClientRect();
		let distanceFromTop = -top * window.innerHeight;
		let distanceFromBottom = -bottom * window.innerHeight;
		return elementItem.top - window.innerHeight < distanceFromTop && elementItem.bottom - window.innerHeight > distanceFromBottom ? true : false;
	}

	function showContentItem() {
		keywordItems.forEach(function(item){
			gsap.set(item, {autoAlpha: 0})
			gsap.to(item,  Math.random()*2.5 + 0.5, {
				autoAlpha: 1,
				ease : Power4.easeInOut, 
				})
		})
	}

	contentContainer.addEventListener('click', showContentItem);
}