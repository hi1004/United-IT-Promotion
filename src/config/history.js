

import $ from 'jquery'
import { TweenMax, TimelineMax, Linear } from "gsap"; // Also works with TweenLite and TimelineLite
import  ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems

import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";


ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);




export default function() {
  
  let historyItems = Array.from(document.querySelectorAll('.history-item'))

  window.addEventListener('scroll', scanElements)

  function scanElements(){
    historyItems.forEach(element =>{
      if(isVisable(element)){
        element.classList.add('active');
      } else{
        element.classList.remove('active')
      }      
    })
  }

  function isVisable(element){
    const elementItem = element.getBoundingClientRect();
    let distanceFromTop = -0.1 * window.innerHeight;
    let distanceFromBottom = -0.9 * window.innerHeight;
    return elementItem.top - window.innerHeight < distanceFromTop && elementItem.top - window.innerHeight > distanceFromBottom ? true : false;
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

