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
  const videoWrap = document.querySelector('.video-wrap');
  // const videoBG = document.querySelector('.video-bg');

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
    const changeSize = new TimelineMax().to(videoWrap, 1, {
      scale: 1,
      position: 'absolute',
      left: 0,
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

  function videoBtnPlay() {
    const videoPlayBtn = aboutSection.querySelector('.video-intro .play-btn');
    const videocloseBtn = aboutSection.querySelector('.video-intro .close-btn');
    const introVideo = aboutSection.querySelector('.video-intro video');
    function playEvent(el) {
      el.addEventListener('click', () => {
        introVideo.play();
        gsap.to(videoPlayBtn, 1, {
          display: 'none',
          opacity: 0,
        });
        gsap.to(videocloseBtn, .5, {
          display: 'block',
          opacity: 1,
        });
        gsap.to(aboutVideoIntro, .5, {
          width: '100%',
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)', 
        });
        gsap.to(bodyEl, 1, {
          overflowY: 'hidden',
        });
        gsap.to('#app',1,{
          backgroundColor: '#fdc00075'
        })
        executivesTitle.style.display = 'none';
        introVideo.style.hover = 'unset'
      });
    }   
      playEvent(videoPlayBtn);
   
    function closeEvent(el){
      el.addEventListener('click', () => {
      
        introVideo.pause();
        gsap.to(videoPlayBtn, 1, {
          display: 'block',
          opacity: 1,
        });
        gsap.to(videocloseBtn, .5, {
          display: 'none',
          opacity: 0,
        });
        gsap.to(aboutVideoIntro, .5, {
          width: '100%',
          position: 'relative',
          left: '0%',
          top: '0%',
          transform: 'translate(0%, 0%)',
          scale: 1
        });
        gsap.to(bodyEl, 1, {
          overflowY: 'auto',
          
        });
        gsap.to('#app',1,{
          backgroundColor: 'unset'
          
        })
        executivesTitle.style.display = 'block';
      });
    }
    closeEvent(videocloseBtn);
   
  }
  videoBtnPlay();

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
      .addIndicators({
        name: 'aboutVideo-event',
        colorStart: 'red',
        colorTrigger: 'red',
        colorEnd: 'red',
      })
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
    const scrollToExecutivesEvent = new TimelineMax().to(executivesTitle, 0.5, {
      position: 'fixed',
      width: '100%',
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

      .addTo(controller);
  }
  executivesScrollAnimate();
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
    const scrollToExecutivesEvent = new TimelineMax().to(executivesTitle, 0.5, {
      opacity: 0,
      y: '-100%',
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

  // ---------------------------------------ACTIVITIES----------------------------------------------
  const activitiesContainer = document.querySelector('#activities__container')

  const btnWrap = document.querySelector('.btn__wrap');
  const moveBtns = document.querySelectorAll('.move_btn');

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
        fontSize: '5vw'       
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

  /* SLIDE MOVE BUTTON */
  function resetBtnClicked() {
    moveBtns.forEach((btn)=>{
      btn.classList.remove('btn_clicked')
    })
  }






  /* CURSOR */
  const cursorWrap = document.querySelector('#cursor__wrap');
  const cursors = cursorWrap.querySelectorAll('.cursor')  

  /* CURSOR MOVE AND TRAIL EFFECT */
  let aimX = 0;
  let aimY = 0;
  
  cursors.forEach((cursor, i)=>{
  let currentX = 0;
  let currentY = 0;

  let speed = 0.4 - i * 0.01

  const animate = function() {
    currentX += (aimX - currentX) * speed;
    currentY += (aimY - currentY) * speed;

    cursor.style.left = currentX + 'px';      
    cursor.style.top = currentY + 'px';

    requestAnimationFrame(animate);
  }
  animate();
  })
  
  // let timer

  document.addEventListener('mousemove', function(e){
    aimX = e.clientX;
    aimY = e.clientY;
    cursorWrap.classList.remove('cursor_hidden')
    cursorWrap.style.display = 'block';
    // clearTimeout(timer);
    // timer = setTimeout(()=>{cursorWrap.classList.add('cursor_hidden');},300);
  })
  document.addEventListener('mouseout', function(){
    cursorWrap.style.display = 'none';
  })
  

  /* HOVER EFFECT */
  const anchorEls = document.querySelectorAll('a');
  const hoverClassEls = document.querySelectorAll('.cursor__hover_el');
  
  const hoverEls = [
    ...anchorEls,
    ...hoverClassEls
  ]

  hoverEls.forEach((element)=>{
  element.addEventListener('mouseover', ()=>{
    cursors.forEach((cursor)=>{
      cursor.classList.add('hover')
    })
  })
  element.addEventListener('mouseout', ()=>{
    cursors.forEach((cursor)=>{
      cursor.classList.remove('hover')
    })
  })
  })

  /* MOUSE CLICK EFFECT */
  window.addEventListener('click', ()=>{
    cursors.forEach((cursor)=>{
      cursor.classList.add('click')
      setTimeout(()=>{cursor.classList.remove('click')}, 500)
    })
  })  

} // end
