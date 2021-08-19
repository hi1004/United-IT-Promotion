const ScrollTrigger = window.ScrollTrigger;
const gsap = window.gsap;

export default function(){  

  // const homePadding = document.querySelector('.padding');

  /* SHOW MENU */
  const snCollapseLinks = document.querySelectorAll('.collapse__link'); 
  const snCollapseMenus = document.querySelectorAll('.collapse__menu'); 
  const snToolTips = document.querySelectorAll('.side-nav__tooltip');

  /* body padding control*/
  const snBodyPadding = document.getElementById('body-pd');
  function resetBodyPd() {
    snBodyPadding.classList.remove('body-pd-reset')
    snBodyPadding.classList.remove('body-pd-default')
    snBodyPadding.classList.remove('body-pd-expander')
  }

  if (window.innerWidth > 768) {
    snBodyPadding.classList.add('body-pd-default')
  }
  

  window.addEventListener('resize', ()=>{
    if (window.innerWidth < 769) {
      resetBodyPd()
      snBodyPadding.classList.add('body-pd-reset')
    } else {
      if (document.getElementById('navbar').classList.contains('expander')) {
        resetBodyPd()
        snBodyPadding.classList.add('body-pd-expander')
      } else {
        resetBodyPd()
        snBodyPadding.classList.add('body-pd-default')
      }      
    }   
  })

  const showMenu = (toggleId, navbarId) => {
    const snToggle = document.getElementById(toggleId),
      snNavBar = document.getElementById(navbarId);      
      snToggle.addEventListener('click', () => {
        snNavBar.classList.toggle('expander');
        snToggle.classList.toggle('toggle-active');
        // homePadding.classList.toggle('body-padding')

        snToolTips.forEach((snToolTip) => {
          snToolTip.classList.toggle('snToolTip-active');
        })
       
        snCollapseLinks.forEach((snCollapseLink) => {
          snCollapseLink.classList.remove('rotate');          
        });
        snCollapseMenus.forEach((snCollapseMenu)=>{
          snCollapseMenu.classList.remove('showCollapse')
        })       
        
        resetBodyPd()
        if(snNavBar.classList.contains('expander')){          
          snBodyPadding.classList.add('body-pd-expander')
          snLinks.forEach((snLink) => {
            if(snLink.classList.contains('color-active')&& snLink.classList.contains('collapse')){
              snLink.querySelector('.collapse__link').classList.add('rotate')
              snLink.querySelector('.collapse__menu').classList.add('showCollapse')
            }
          })
        }
        else{
          snBodyPadding.classList.add('body-pd-default')
        }
      });
  };
 
  showMenu('nav-toggle', 'navbar');



  /* LINK CLICK EVENT */
  const snLinks = document.querySelectorAll('.side-nav__link');
  const snNavBar = document.getElementById('navbar');  

  const sectionSelectors = ['#intro', '#about', '#executives', '#activities', '#contact']

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
        start: 'top 80%',
        end: 'bottom 80%',
        onEnter: enterSection,
        onLeave: leaveSection,
        onEnterBack: enterSection,
        onLeaveBack: leaveSection    
      })
    })
  }
  linkActiveOnScroll()  

  /* scroll to section on click */  
  function scrollToSection(i, xPos){      
    for(let j=0; j<snLinks.length; j++){
      snLinks[j].style.pointerEvents = 'none';
      ScrollTrigger.getById(`active link scroll${j}`).disable();
    }
    gsap.to(window, {
      scrollTo: {offsetX: xPos, y:sectionSelectors[i]}
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
      if (snBodyPadding.classList.contains('body-pd-default')) {
        scrollToSection(i, 92)
      }
      else if (snBodyPadding.classList.contains('body-pd-expander')) {
        scrollToSection(i, '2rem')
      }
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
  /* active sublink on click */
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
      start: 'top center',
      end: 'bottom center',
      onEnter: enterSection,
      onLeave: leaveSection,
      onEnterBack: enterSection,
      onLeaveBack: leaveSection    
    })
  })

  
 
}

