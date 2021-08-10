// import { $ } from "jquery";
import scrollTo from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

const ScrollMagic = window.ScrollMagic;
const gsap = window.gsap;
const TimelineMax = window.TimelineMax;
const controller = new ScrollMagic.Controller();

gsap.registerPlugin(scrollTo);
gsap.registerPlugin(ScrollTrigger);

export default function () {
  /* SCROLL DISABLE */
  const bodyEl = document.querySelector('body');
  const canvases = document.querySelectorAll('.bg-canvas');
  setTimeout(function () {
    canvases.forEach(function (canvas) {
      gsap.to(canvas, 2, {
        opacity: 1,
        display: 'block',
      });
    });
  }, 2000);
  

  // ---------------------------------------ABOUT----------------------------------------------

  const aboutSection = document.querySelector('#about');
  const aboutTitle = document.querySelector('#about .about__title');
  const aboutTitleText = document.querySelector('#about .about__title h1');
  const videoContent = document.querySelector('.video__content');

  // /* SCROLL MAGIC - CHANGE TO ABOUT */
  function changeToAbout() {
    const changeToAboutEvent = new TimelineMax()
      .to(bodyEl, 2, {
        backgroundColor: '#f6f6f6',
      })
      .to(aboutSection, 2, {
        color: '#000',
      });

    new ScrollMagic.Scene({
      triggerElement: aboutSection,
      triggerHook: 0.7,
      duration: '100%',
    })
      .setTween(changeToAboutEvent)
      
      .addTo(controller);
  }
  changeToAbout();

  /* SCROLL TRIGGER - ABOUT DESCRIPTION EFFECT */
  function aboutDescriptionEffect() {
    const aboutWords = document.querySelectorAll('.about__word')
    const aboutWords02 = document.querySelectorAll('.about__word02')
    const aboutScreamer = document.querySelector('.about__screamer')

    function enterDesc(){
      aboutWords.forEach((word, i)=>{
        setTimeout(()=>{word.classList.add('word_show')}, 50*i)
      })        
    }
    function enterBackDesc(){
      aboutWords.forEach((word, i)=>{
        setTimeout(()=>{word.classList.add('word_show')}, 100*(aboutWords.length-1-i))
      })        
    }
    function leaveDesc(){
      aboutWords.forEach((word)=>{
        word.classList.remove('word_show')
      })
    }
    ScrollTrigger.create({
      trigger: '.description01',
      onEnter: enterDesc,
      onEnterBack: enterBackDesc,
      onLeave: leaveDesc,
      onLeaveBack: leaveDesc
    })   


    function enterDesc02(){
      aboutWords02.forEach((word, i)=>{
        setTimeout(()=>{word.classList.add('word_show')}, 100*i)
      })        
      setTimeout(()=>{aboutScreamer.classList.add('word_show')}, 350)
    }
    function enterBackDesc02(){
      aboutWords02.forEach((word, i)=>{
        setTimeout(()=>{word.classList.add('word_show')}, 100*(aboutWords02.length-1-i))
      })        
      setTimeout(()=>{aboutScreamer.classList.add('word_show')}, 350)
    }
    function leaveDesc02(){
      aboutWords02.forEach((word)=>{
        word.classList.remove('word_show')
      })
      aboutScreamer.classList.remove('word_show')
    }
    ScrollTrigger.create({
      trigger: '.description02',
      onEnter: enterDesc02,
      onEnterBack: enterBackDesc02,
      onLeave: leaveDesc02,
      onLeaveBack: leaveDesc02
    })
  }
  aboutDescriptionEffect()

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
      .setTween(changeSize)
      .addTo(controller);
  }
  aboutTitleAnimate();

  /* SCROLL MAGIC - ABOUT VIDEO ANIMATE */
  function aboutVideoAnimate() {
    const changeSize = new TimelineMax()
    .to(videoContent, 1, {
      scale: 1
    });
    new ScrollMagic.Scene({
      triggerElement: aboutTitle,
      triggerHook: 0.3,
      duration: '40%',
    })
      .setTween(changeSize)
      .addTo(controller);
  }
  aboutVideoAnimate();

  function videoToggle() {
    const videoIntro = aboutSection.querySelector('.video-intro');
    const videoPlayBtn = aboutSection.querySelector('.play-btn')
    const videoCloseBtn = aboutSection.querySelector('.close-btn')
    const video = videoIntro.querySelector('video');
    
    
    videoPlayBtn.addEventListener('click',()=>{
      videoIntro.classList.toggle('video-active')
      bodyEl.style.overflowY="hidden"
      video.play();
      video.currentTime = 0;
    })
    videoCloseBtn.addEventListener('click',()=>{
      bodyEl.style.overflowY="unset"
      videoIntro.classList.toggle('video-active')
      video.currentTime = 0;
      video.pause();
    })
    
  }
  videoToggle();

  // ---------------------------------------EXECUTIVES----------------------------------------------

  const executivesSection = document.querySelector('#executives');
  // const executivesRightBox = document.querySelector('#executives .right-box');
  const executivesLeftBox = document.querySelector('#executives .left-box');
  const aboutSpacer = document.querySelector('#about .spacer');
  const executivesProfiles = document.querySelectorAll('.profile');
  const executivesImages = document.querySelectorAll('.img');
  const abouVideoPoster = document.querySelector('.video-poster');

  // const executivesSpacer = document.querySelector('#executives .spacer');

  /* SCROLL MAGIC - CHANGE TO EXECUTIVES */
  function changeToExecutives() {
    const changeToExecutivesEvent = new TimelineMax().to(bodyEl, 1, {
      backgroundColor: '#171818',
      ease: 'power1.inOut',
    });
    new ScrollMagic.Scene({
      triggerElement: abouVideoPoster,
      triggerHook: 0.2,
      duration: '100%',
    })
      .setTween(changeToExecutivesEvent)
      .addTo(controller);
  }
  changeToExecutives();

  /* SCROLL MAGIC - EXECUTIVES TEXT ANIMATE  */
  function executivesTextAnimate() {
    const changeToExecutivesEvent = new TimelineMax().to(executivesSection, 1, {
      color: '#fff',
    });
    new ScrollMagic.Scene({
      triggerElement: aboutSpacer,
      triggerHook: 0.2,
      duration: '100%',
    })
      .setTween(changeToExecutivesEvent)

      .addTo(controller);
  }
  executivesTextAnimate();

  /* SCROLL MAGIC - EXECUTIVES SCROLL ANIMATE */
  const executivesTitle = document.querySelector('.executives__title');

  // function executivesScrollAnimate() {
  //   const scrollToExecutivesEvent = new TimelineMax().to(executivesTitle, 0.5, {
  //     position: 'fixed',
  //     width: '100%',
  //     bottom: '25rem',
  //     fontSize: '4vw',
  //   });

  //   new ScrollMagic.Scene({
  //     triggerElement: aboutSpacer,
  //     triggerHook: 0,
  //     duration: '50%',
  //   })
  //     .setPin(executivesSection)
  //     .setTween(scrollToExecutivesEvent)

  //     .addTo(controller);
  // }

  // executivesScrollAnimate();

  // const executivesImgWrap = document.querySelector('#executives .img-wrap');
  // const executivesImgs = executivesSection.querySelectorAll('.img');
  const colorArry = [
    '#5b45ff',
    '#e9f036',
    '#FCA742',
    '#F82DDE',
    '#5b45ff',
    '#463E43',
    '#B0E7E4',
    '#3C80FC',
    '#e9f036',
    '#4EF480',
  ];

  function profileScrollAnimate() {
    executivesProfiles.forEach(function (executivesProfile, i) {
      const scrollToExecutivesEvent = new TimelineMax()
        .to(executivesTitle, 0.5, {
          color: colorArry[i],
        })
        .fromTo(
          executivesImages[i],
          0.7,
          {
            y: 0,
            opacity: 0,
          },
          {
            y: -20,
            opacity: 1,
            yoyo: true,
          }
        );
      new ScrollMagic.Scene({
        triggerElement: executivesProfile,
        triggerHook: 1,
        duration: '130%',
      })
        // .setClassToggle(executivesProfile, 'active')
        .setTween(scrollToExecutivesEvent)
        .on('end', function () {
          executivesImages[i].style.opacity = 0;
        })
        .addTo(controller);
    });
  }
  profileScrollAnimate();

  // const pin01 = document.querySelector('#pin1')
  function executivesImagesAnimate() {
    new ScrollMagic.Scene({
      triggerElement: executivesLeftBox,
      duration: '1200%',
    })
      .setPin(executivesLeftBox)
      .addTo(controller);
  }
  executivesImagesAnimate();

  /* SCROLL MAGIC - EXECUTIVES SCROLL STOP ANIMATE */
  function executivesScrollStopAnimate() {
    const scrollToExecutivesEvent = new TimelineMax().to(executivesTitle, 0.5, {
      opacity: 0,
      y: '-100%',
    });
    new ScrollMagic.Scene({
      triggerElement: '#activities__container',
      triggerHook: 1,
      duration: '100%',
    })
      // .setPin(executivesSection)
      .setTween(scrollToExecutivesEvent)
      .addTo(controller);
  }
  executivesScrollStopAnimate();

  // ---------------------------------------ACTIVITIES----------------------------------------------
  const activitiesContainer = document.querySelector('#activities__container')

  const slideSpaces = document.querySelectorAll('.slide__space')
  const slideWrap = document.querySelector('.slide__wrap')
  const slideContents = document.querySelectorAll('.slide__content')
  

  /* SCROLL MAGIC - CHANGE TO ACTIVITIES */
  function changeToActivities() {
    const changeToActivitiesEvent = new TimelineMax()
    .to(bodyEl, 1, {
      backgroundColor: '#f6f6f6',
      ease: 'power1.inOut',
    })
    .to('#slide__index_title', 2, {
      color: '#000',
    })
    new ScrollMagic.Scene({
      triggerElement: activitiesContainer,
      triggerHook: 1,
      duration: '100%',
    })
      .setTween(changeToActivitiesEvent)
      .addTo(controller);
  }
  changeToActivities();

  /* SLIDE WIPE */

  slideSpaces.forEach((slideSpace, i)=>{
    const wipeSlide = new TimelineMax()
      .to(slideContents[i], 1, { x: '-100%'})
    new ScrollMagic.Scene({
      triggerElement: slideSpace,
      triggerHook: 0,
      duration: '100%',
    })
      .setTween(wipeSlide)
      .addTo(controller);    
  })

  function pinSlide() {
    new ScrollMagic.Scene({
      triggerElement: activitiesContainer,
      triggerHook: 0,
      duration: '300%',
    })
      .setPin(slideWrap)
      .addTo(controller); 
  }
  pinSlide()
  
        
  
  /* SLIDE INDEX TITLE */
  function resizeTitle() {
    const titleResize = new TimelineMax()
      .to('#slide__index_title', {
        fontSize: '5vw',      
      })
    new ScrollMagic.Scene({
      triggerElement: slideSpaces[0],
      triggerHook: 0,
      duration: '50%',
    })
      .setTween(titleResize)
      .addTo(controller);
  }
  resizeTitle();

  function pinTitle() {
    new ScrollMagic.Scene({
      triggerElement: slideSpaces[0],
      triggerHook: 0,
      duration: '100%',
    })
      .setPin('#slide__index_title')
      .addTo(controller);
  }
  pinTitle();  

} // end
