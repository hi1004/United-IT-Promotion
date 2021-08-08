import { gsap } from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(scrollTo);
gsap.registerPlugin(ScrollTrigger);

export default function(){  

  /* SHOW MENU */
  const snCollapseLinks = document.querySelectorAll('.collapse__link');
  const snCollapseMenus = document.querySelectorAll('.collapse__menu');
  
  const showMenu = (toggleId, navbarId, bodyId) => {
    const snToggle = document.getElementById(toggleId),
      snNavBar = document.getElementById(navbarId),
      snBodyPadding = document.getElementById(bodyId);
      snToggle.addEventListener('click', () => {
        snNavBar.classList.toggle('expander');
        snBodyPadding.classList.toggle('body-pd');
        snToggle.classList.toggle('toggle-active');

        snCollapseLinks.forEach((snCollapseLink) => {
          snCollapseLink.classList.remove('rotate');          
        });
        snCollapseMenus.forEach((snCollapseMenu)=>{
          snCollapseMenu.classList.remove('showCollapse')
        })
        if(snNavBar.classList.contains('expander')){
          snLinks.forEach((snLink) => {
            if(snLink.classList.contains('color-active')){
              snLink.querySelector('.collapse__link').classList.add('rotate')
              snLink.querySelector('.collapse__menu').classList.add('showCollapse')
            }
          })
        }
      });
  };
  showMenu('nav-toggle', 'navbar', 'body-pd');



  /* LINK CLICK EVENT */
  const snLinks = document.querySelectorAll('.side-nav__link');
  const snNavBar = document.getElementById('navbar');  

  const sectionSelectors = ['#intro', '#about', '#executives', '#activities']

  /* active link on click */
  function linkActiveOnClick() {    
    snLinks.forEach((snLink) => {
      snLink.classList.remove('color-active')
      if (snLink.classList.contains('collapse')){ 
        const snCollapseLink = snLink.querySelector('.collapse__link');
        const snCollapseMenu = snLink.querySelector('.collapse__menu');        
        snCollapseLink.classList.remove('rotate');
        snCollapseMenu.classList.remove('showCollapse');
      }
    });    
    this.classList.add('color-active');
    if (this.classList.contains('collapse')&&snNavBar.classList.contains('expander')){        
      const snCollapseLink = this.querySelector('.collapse__link');
      const snCollapseMenu = this.querySelector('.collapse__menu'); 
      snCollapseLink.classList.add('rotate');
      snCollapseMenu.classList.add('showCollapse');
    }        
  }
  snLinks.forEach((snLink) => {
    snLink.addEventListener('click', linkActiveOnClick);
  })

  /* active link on scroll */
  function linkActiveOnScroll() {    
    snLinks.forEach((snLink, i) =>{
      function enterSection() {
        snLink.classList.add('color-active')
        if (snLink.classList.contains('collapse')&&snNavBar.classList.contains('expander')){ 
          const snCollapseLink = snLink.querySelector('.collapse__link');
          const snCollapseMenu = snLink.querySelector('.collapse__menu');        
          snCollapseLink.classList.add('rotate');
          snCollapseMenu.classList.add('showCollapse');
        }
      }
      function leaveSection() {
        snLink.classList.remove('color-active')
        if (snLink.classList.contains('collapse')){ 
          const snCollapseLink = snLink.querySelector('.collapse__link');
          const snCollapseMenu = snLink.querySelector('.collapse__menu');        
          snCollapseLink.classList.remove('rotate');
          snCollapseMenu.classList.remove('showCollapse');
        }
      }
      ScrollTrigger.create({
        id: `active link scroll${i}`, 
        trigger: sectionSelectors[i],

        end: 'bottom',
        onEnter: enterSection,
        onLeave: leaveSection,
        onEnterBack: enterSection,
        onLeaveBack: leaveSection    
      })
    })
  }
  linkActiveOnScroll()  

  /* scroll to section on click */  
  function scrollToSection(i){      
    for(let j=0; j<snLinks.length; j++){
      snLinks[j].style.pointerEvents = 'none';
      ScrollTrigger.getById(`active link scroll${j}`).disable();
    }
    gsap.to(window, {
      scrollTo: sectionSelectors[i]
    })
    setTimeout(()=>{
      for(let j=0; j<snLinks.length; j++){
        snLinks[j].style.pointerEvents = 'auto';
        ScrollTrigger.getById(`active link scroll${j}`).enable();
      }
    }, 1000)
    
  }
  snLinks.forEach((snLink, i) => {
    snLink.addEventListener('click', ()=>{
      scrollToSection(i)
    })
  })

  /* scroll to sub link */
  const activitiesSubLinks = document.querySelectorAll('.menu__activities > .collapse__sublink')
  const activitiesSlideSelectors = ['#first_space', '#second_space', '#third_space']

  function scrollToActivitiesSubLink(i){    
    gsap.to(window, {
      scrollTo: activitiesSlideSelectors[i]
    })         
  }
    /* active sublink on scroll */
  activitiesSubLinks.forEach((subLink, i) => {
    subLink.addEventListener('click', ()=>{
      event.stopPropagation()
      scrollToActivitiesSubLink(i)
    }, {capture: true})
    function enterSection() {
      subLink.classList.add('sublink-active')
    }
    function leaveSection() {
      subLink.classList.remove('sublink-active')
    }
    ScrollTrigger.create({
      trigger: activitiesSlideSelectors[i],
      end: 'top',
      markers: true,
      onEnter: enterSection,
      onLeave: leaveSection,
      onEnterBack: enterSection,
      onLeaveBack: leaveSection    
    })
  })


  const executivesSubLinks = document.querySelectorAll('.menu__executives > .collapse__sublink')
  const executiveSelectors = []
  for (let i=1 ; i<11; i++){
    executiveSelectors.push(`#executive_${i}`)
  }
  function scrollToExecutivesSubLink(i){
    gsap.to(window, {
      scrollTo: executiveSelectors[i]
    })
  }
  /* active sublink on scroll */
  executivesSubLinks.forEach((subLink, i) => {
    subLink.addEventListener('click', ()=>{
      event.stopPropagation()
      scrollToExecutivesSubLink(i)
    }, {capture: true})
    function enterSection() {
      subLink.classList.add('sublink-active')
    }
    function leaveSection() {
      subLink.classList.remove('sublink-active')
    }
    ScrollTrigger.create({
      trigger: executiveSelectors[i],
      end: 'bottom center',
      onEnter: enterSection,
      onLeave: leaveSection,
      onEnterBack: enterSection,
      onLeaveBack: leaveSection    
    })
  })
 
}

