import { gsap } from 'gsap';
import { TimelineMax } from 'gsap/gsap-core';
const ScrollMagic = window.ScrollMagic;

export default function () {
  /* SCROLL DISABLE */
  const bodyEl = document.querySelector('body');
  const canvases = document.querySelectorAll('.bg-canvas');
  // bodyEl.style.backgroundColor = '#000';

  setTimeout(function () {
    // bodyEl.style.overflowY = 'visible';
    bodyEl.style.position = 'relative';
    // bodyEl.style.backgroundColor = '#171818';
    canvases.forEach(function (canvas) {
      gsap.to(canvas, 2, {
        opacity: 1,
        display: 'block',
      });
    });
  }, 2000);

  window.onload = function () {
    const toolBar = document.querySelector('.main-tool-bar');
    setTimeout(() => {
      toolBar.classList.add('show-tool-bar');
    }, 2000);

    gsap.to(window, 0, {
      scrollTo: 0,
    });
  };

  /* SCROLL MAGIC */
  const controller = new ScrollMagic.Controller();
  const tween1 = gsap.to('#animate1', 0.5, {
    backgroundColor: '#333333',
    scale: 2.5,
    rotation: 660,
    x: 130,
  });

 new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    duration: '100%',
  })
    .setTween(tween1)
    .setPin("#pin1")
    .addTo(controller)
    .addIndicators({
      name: '1',
    });


    var wipeAnimation = new TimelineMax()
    // animate to second
    .to("#slideContainer", 1, {z: -180} )
    .to("#slideContainer", 1, {x:"-25%"} )
    .to("#slideContainer", 1, {z: 0} )
    // animate to third
    .to("#slideContainer", 1, {z: -180, delay: 0.6} )
    .to("#slideContainer", 1, {x:"-50%"} )
    .to("#slideContainer", 1, {z: 0} )
    // animate to forth
    .to("#slideContainer", 1, {z: -180, delay: 0.6} )
    .to("#slideContainer", 1, {x:"-75%"} )
    .to("#slideContainer", 1, {z: 0} )
  
     new ScrollMagic.Scene({
          triggerElement: "#pinContainer",
          triggerHook: "onLeave",
          duration: "500%" //이 값이 클 수록 천천히 덮어씀
    })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addIndicators() 
    .addTo(controller);


}
