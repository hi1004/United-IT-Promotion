import $ from 'jquery'
import { TweenMax, TimelineMax, Linear } from "gsap"; // Also works with TweenLite and TimelineLite
import  ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems

import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";


ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);




export default function() {
  
  let historyItems = Array.from(document.querySelectorAll('.history-item'))
  let historyTitleTexts = Array.from(document.querySelectorAll('#title-history>text'))

  window.addEventListener('scroll', scanElements)

  function scanElements(){
	historyTitleTexts.forEach(element =>{
		if(isVisable(element, 0, 1)){
			element.classList.add('title-effect');
		} else{
			element.classList.remove('title-effect')
		}		
	})
	historyItems.forEach(element =>{
		if(isVisable(element)){
			element.classList.add('year-effect');
		} else{
			element.classList.remove('year-effect')
		}

	if(isVisable(element, 0.4, 0.6)){
			element.classList.add('year-focus');
		} else{
			element.classList.remove('year-focus')
		}            
	})
  }

  function isVisable(element, top=0.1, bottom=0.8){
    const elementItem = element.getBoundingClientRect();
    let distanceFromTop = -top * window.innerHeight;
    let distanceFromBottom = -bottom * window.innerHeight;
    return elementItem.top - window.innerHeight < distanceFromTop && elementItem.bottom - window.innerHeight > distanceFromBottom ? true : false;
  }  




/* svg */
  function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

	var $word = $("path#word");
	var $dot = $("path#dot");

	// prepare SVG
	pathPrepare($word);
	pathPrepare($dot);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
		.add(TweenMax.to("path", 1, {stroke: "#fff", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

          
        
}

