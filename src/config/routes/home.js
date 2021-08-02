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
      .addIndicators({
        name: 'bg-change',
        colorStart: 'yellow',
        colorTrigger: 'yellow',
        colorEnd: 'yellow',
      })
      .addTo(controller);
  }
  changeToAbout();

  /* SCROLL TRIGGER - ABOUT DESCRIPTION EFFECT */
  function aboutDescriptionEffect() {
    const aboutWords = document.querySelectorAll('.about__word')
    const aboutWords02 = document.querySelectorAll('.about__word02')
    const aboutScreamer = document.querySelector('.about__screamer')

    ScrollTrigger.create({
      trigger: '.description01',
      start: 'top 80%',
      onEnter: ()=>{
        aboutWords.forEach((word, i)=>{
          setTimeout(()=>{word.classList.add('word_show')}, 50*i)
        })
      }
    })   
    
    ScrollTrigger.create({
      trigger: '.description02',
      start: 'top 80%',
      onEnter: ()=>{
        aboutWords02.forEach((word, i)=>{
          setTimeout(()=>{word.classList.add('word_show')}, 100*i)
        })        
        setTimeout(()=>{aboutScreamer.classList.add('word_show')}, 350)
      }
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

  // ---------------------------------------EXECUTIVES----------------------------------------------

  const executivesSection = document.querySelector('#executives');
  // const executivesRightBox = document.querySelector('#executives .right-box');
  const executivesLeftBox = document.querySelector('#executives .left-box');
  const aboutVideoIntro = document.querySelector('#about .video-intro');
  const aboutSpacer = document.querySelector('#about .spacer');
  const executivesProfiles = document.querySelectorAll('.profile');
  const executivesImages = document.querySelectorAll('.img');

  // const executivesSpacer = document.querySelector('#executives .spacer');

  /* SCROLL MAGIC - CHANGE TO EXECUTIVES */
  function changeToExecutives() {
    const changeToExecutivesEvent = new TimelineMax().to(bodyEl, 1, {
      backgroundColor: '#171818',
      ease: 'power1.inOut',
    });
    new ScrollMagic.Scene({
      triggerElement: aboutVideoIntro,
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
  const executivesTitle = document.querySelector('#executives .title');
 
  function executivesScrollAnimate() {
    const scrollToExecutivesEvent = new TimelineMax().to(executivesTitle, 1, {
      position: 'fixed',
      width: '100%',
      left: 'unset',
      bottom: '25rem',
      fontSize: '4vw',
    });

    new ScrollMagic.Scene({
      triggerElement: aboutSpacer,
      triggerHook: 0,
      duration: '50%',
    })
      .setPin(executivesSection)
      .setTween(scrollToExecutivesEvent)
      .addIndicators({
        name: 'Title-event',
        colorStart: 'red',
        colorTrigger: 'red',
        colorEnd: 'red',
      })
      .addTo(controller)
  }
  executivesScrollAnimate();
  // const executivesImgWrap = document.querySelector('#executives .img-wrap');
  // const executivesImgs = executivesSection.querySelectorAll('.img');
  const colorArry = ['#5b45ff','green','#FCA742','#F82DDE','#5b45ff','#463E43','#B0E7E4','#3C80FC','','#4EF480'];

  function profileScrollAnimate() {
    executivesProfiles.forEach(function (executivesProfile, i) {
      const scrollToExecutivesEvent = new TimelineMax()
      .to(executivesTitle,.5,{
        color: colorArry[i]
      })
      .fromTo(executivesImages[i], .7, {
        y: 0,
        opacity: 0,
      }, {
        y: -20,
        opacity: 1,
        yoyo: true
      })
      new ScrollMagic.Scene({
        triggerElement: executivesProfile,
        triggerHook: 1,
        duration: '130%',
      })
        .addIndicators({
          name: 'img-event',
          colorStart: 'green',
          colorTrigger: 'green',
          colorEnd: 'green',
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
      .addIndicators({
        name: 'pin-event',
        colorStart: 'yellow',
        colorEnd: 'yellow',
      })

      .addTo(controller);
  }
  executivesImagesAnimate();

  /* SCROLL MAGIC - EXECUTIVES SCROLL STOP ANIMATE */
  function executivesScrollStopAnimate() {
    const scrollToExecutivesEvent = new TimelineMax().to(executivesTitle, 1, {
     opacity:0,
     y: '-100%'
    });
    new ScrollMagic.Scene({
      triggerElement: '#activities__container',
      triggerHook: 1,
      duration: '100%',
    })
      .setPin(executivesSection)
      .addIndicators({
        name: 'stop-event',
        colorStart: 'red',
        colorTrigger: 'red',
        colorEnd: 'red',
      })
      .setTween(scrollToExecutivesEvent)
      .addTo(controller);
  }
  executivesScrollStopAnimate();

  // ---------------------------------------Activities----------------------------------------------
  const activitiesContainer = document.querySelector('#activities__container')
  const slideContainer = document.querySelector('#slide__container')

  const btnWrap = document.querySelector('.btn__wrap')
  const moveBtns = document.querySelectorAll('.move_btn')

  let startYpos = activitiesContainer.offsetTop;

  
  
  /* RESIZE HANDLING */
  window.addEventListener('resize', ()=>{
    console.log(startYpos)
    btnFunction()
  })

  /* SCROLL MAGIC - CHANGE TO EXECUTIVES */
  function changeToActivities() {
    const changeToActivitiesEvent = new TimelineMax()
    .to(bodyEl, 1, {
      backgroundColor: '#f6f6f6',
      ease: 'power1.inOut',
    })
    .to('#index_title', 2, {
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


  /* SCROLL MAGIC - Activities SLIDE */  

  function activitiesSlide() {
    const wipeAnimation = new TimelineMax()
      .to('#slide__container', 1, {x: '-25%' })
      .to('#slide__container', 1, { x: '-50%' })
      .to('#slide__container', 1, { x: '-75%' })

    new ScrollMagic.Scene({
      triggerElement: '#activities__container',
      triggerHook: 0,
      duration: '300%',
    })
      .setPin('#activities__container')
      .setTween(wipeAnimation)
      .addTo(controller);
  }
  activitiesSlide();

  function resizeTitle() {
    const titleResize = new TimelineMax()
      .to('#index_title', {
        fontSize: '7vw'       
      })
    new ScrollMagic.Scene({
      triggerElement: '#activities__container',
      triggerHook: 0,
      duration: '30%',
    })
    .setTween(titleResize)
    .addTo(controller);
  }
  resizeTitle();

  /* SLIDE MOVE BUTTON */
  function resetBtnClicked() {
    moveBtns.forEach((btn)=>{
      btn.classList.remove('btn_clicked')
    })
  }

  function btnFunction() {    
    moveBtns.forEach((btn, i)=>{
      btn.addEventListener('click', ()=>{
        console.log(`현재 위치 : ${window.scrollY}`);
        console.log(`슬라이드 시작점 위치 : ${startYpos}`);
        console.log(`슬라이드 위치 : ${startYpos + slideContainer.offsetHeight*(i+1)}`);
        resetBtnClicked()
        btn.classList.add('btn_clicked')
        gsap.to(window, .3,{
          scrollTo: startYpos + slideContainer.offsetHeight*(i+1)        
        })
      })
    })
  }
  btnFunction()

  function activeBtns() {
    new ScrollMagic.Scene({
      triggerElement: '#activities__container',
      triggerHook: 0,
      duration: '305%',
    })
      .setClassToggle(btnWrap, 'btn_active')
      .addTo(controller);
  }
  activeBtns();

} // end
