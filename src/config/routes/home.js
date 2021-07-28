// import $ from 'jquery';
const ScrollMagic = window.ScrollMagic;
const gsap = window.gsap;
// const TweenMax = window.TweenMax;
const TimelineMax = window.TimelineMax;
// const Linear = window.Linear;
const controller = new ScrollMagic.Controller();
export default function () {
  /* SCROLL DISABLE */
  const bodyEl = document.querySelector('body');
  const canvases = document.querySelectorAll('.bg-canvas');
 
 

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

 

  const wipeAnimation = new TimelineMax()
    // animate to second
    .to('#slideContainer', 1, { z: -180 })
    .to('#slideContainer', 1, { x: '-25%' })
    .to('#slideContainer', 1, { z: 0 })
  // // animate to third
    .to("#slideContainer", 1, {z: -180, delay: 0.6} )
  .to("#slideContainer", 1, {x:"-50%"} )
  .to("#slideContainer", 1, {z: 0} )
  // // animate to forth
   .to("#slideContainer", 1, {z: -180, delay: 0.6} )
   .to("#slideContainer", 1, {x:"-75%"} )
   .to("#slideContainer", 1, {z: 0} )

  //  const btnEl = document.querySelector('.btn')



  new ScrollMagic.Scene({
    triggerElement: '#pinContainer',
    triggerHook: 0,
    duration: '200%',
  })
    .setPin('#pinContainer')
    .setTween(wipeAnimation)
    .addIndicators({
      name: 'slide',
      colorStart: 'yellow',
      colorTrigger: 'yellow',
      colorEnd: 'yellow',
    })
    .addTo(controller);
}



    
  

