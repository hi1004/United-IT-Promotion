const ScrollMagic = window.ScrollMagic;
const gsap = window.gsap;
const TimelineMax = window.TimelineMax;
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

  




  // ---------------------------------------ABOUT----------------------------------------------
  
  const aboutSection = document.querySelector('#about');
  const aboutTitle = document.querySelector('#about .about__title');
  const aboutTitleText = document.querySelector('#about .about__title h1');
  const videoBG = document.querySelector('.video-bg');

  /* SCROLL MAGIC - CHANGE TO ABOUT */
  function changeToAbout() {
    const changeToAboutEvent = new TimelineMax()
      .to(bodyEl, 1, {
        backgroundColor: '#f6f6f6',
      })
      .to(aboutSection, 1, {
        color: '#000',
      });

    new ScrollMagic.Scene({
      triggerElement: aboutSection,
      triggerHook: 0.7,
      duration: '100%',
    })
      .setTween(changeToAboutEvent)
      .addIndicators({
        name: 'bg-change',
        colorStart: 'yellow',
        colorTrigger: 'yellow',
        colorEnd: 'yellow',
      })
      .addTo(controller);
  }
  changeToAbout();

  /* SCROLL MAGIC - ABOUT TITLE ANIMATE */
  function aboutTitleAnimate() {
    const changeSize = new TimelineMax().to(aboutTitleText, 1, {
      scale: 0.5,
    });
    new ScrollMagic.Scene({
      triggerElement: aboutTitle,
      triggerHook: 0.3,
      duration: '40%',
    })
      .addIndicators({
        name: 'about-title',
        colorStart: 'green',
        colorEnd: 'green',
      })
      .setTween(changeSize)
      .addTo(controller);
  }
  aboutTitleAnimate();

  /* SCROLL MAGIC - ABOUT VIDEO ANIMATE */
  function aboutVideoAnimate() {
    const changeSize = new TimelineMax().to(videoBG, 1, {
      scale: 1.3,
    });

    new ScrollMagic.Scene({
      triggerElement: aboutTitle,
      triggerHook: 0.3,
      duration: '40%',
    })
      .addIndicators({
        name: 'about-video',
        colorStart: 'blue',
        colorTrigger: 'blue',
        colorEnd: 'blue',
      })
      .setTween(changeSize)
      .addTo(controller);
  }
  aboutVideoAnimate();




  // ---------------------------------------ACTIVITY---------------------------------------------- 

  /* SCROLL MAGIC - ACTIVITY SLIDE */
  function activitySlide() {
    const wipeAnimation = new TimelineMax()
      // animate to second
      .to('#slideContainer', 1, { z: -180 })
      .to('#slideContainer', 1, { x: '-25%' })
      .to('#slideContainer', 1, { z: 0 })
      // // animate to third
      .to('#slideContainer', 1, { z: -180, delay: 0.6 })
      .to('#slideContainer', 1, { x: '-50%' })
      .to('#slideContainer', 1, { z: 0 })
      // // animate to forth
      .to('#slideContainer', 1, { z: -180, delay: 0.6 })
      .to('#slideContainer', 1, { x: '-75%' })
      .to('#slideContainer', 1, { z: 0 });

    new ScrollMagic.Scene({
      triggerElement: '#pinContainer',
      triggerHook: 0,
      duration: '200%',
    })
      .setPin('#pinContainer')
      .setTween(wipeAnimation)
      .addTo(controller);
  }
  activitySlide();





} // end
