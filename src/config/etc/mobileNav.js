const ScrollTrigger = window.ScrollTrigger;
const gsap = window.gsap;

export default function () {
  const bodyEl = document.querySelector('body');
  const sectionSelectors = ['#intro', '#about', '#executives', '#activities', '#contact'];
  const scrollToYpos = [0, 0, 0, -window.innerHeight*0.5-80, -80]
  window.addEventListener('resize', ()=>{
    scrollToYpos[3] = -window.innerHeight*0.5-80;
  })
  const mnLinks = document.querySelectorAll('.mobile-nav__link');
  const mnMenu = document.querySelector('.mobile-nav__menu');
  const mnMenuBtn = document.querySelector('input[type="checkbox"]');
  const mnMenuBtnLabel = document.querySelector('.menu-btn');
  const mnNav = document.querySelector('.mobile-nav');
  
  /* active mobile menu-btn on click */
  function menuBtnOnClick() {
    mnMenu.classList.add('menu-active');
    bodyEl.classList.remove('bd-overflow');
    if (mnMenu.classList.contains('menu-active')) {
      mnMenuBtn.checked = false;
    }
  }

  function menuBtnClickBodyEvent() {
    mnMenuBtnLabel.addEventListener('click', () => {
      
      mnNav.classList.toggle('nav-active');
      if (!mnMenuBtn.checked) { //true
        bodyEl.classList.add('bd-overflow');
      } else {
        bodyEl.classList.remove('bd-overflow');
        
      }
    });
  }
  menuBtnClickBodyEvent();

  /* window reize => bodyOverFlow & unchecked MenuBtn  */
  function bodyOverflowResize(){
    window.addEventListener('resize', ()=> {
      const windowWidth = window.innerWidth;
      if(windowWidth>=769) {
        bodyEl.classList.remove('bd-overflow');
        mnMenuBtn.checked = false;
      }
    })
  }
  bodyOverflowResize();

  /* active mobile link on click */
  function linkActiveOnClick() {
    mnLinks.forEach((mnLink) => {
      mnLink.classList.remove('link_actived');
    });
    this.classList.add('link_actived');
  }
  mnLinks.forEach((mnLink) => {
    mnLink.addEventListener('click', linkActiveOnClick);
    mnLink.addEventListener('click', menuBtnOnClick);
  });

  /* active mobile link on scroll */
  function linkActiveOnScroll() {
    mnLinks.forEach((mnLink, i) => {
      function enterSection() {
        mnLink.classList.add('link_actived');
      }
      function leaveSection() {
        mnLink.classList.remove('link_actived');
      }
      ScrollTrigger.create({
        id: `active mnLink scroll${i}`,
        trigger: sectionSelectors[i],
        start: 'top 80%',
        end: 'bottom 80%',
        onEnter: enterSection,
        onLeave: leaveSection,
        onEnterBack: enterSection,
        onLeaveBack: leaveSection,
      });
    });
  }
  linkActiveOnScroll();

  /* scroll to */
  function scrollToSection(i) {
    for (let j = 0; j < mnLinks.length; j++) {
      mnLinks[j].style.pointerEvents = 'none';
      ScrollTrigger.getById(`active mnLink scroll${j}`).disable();
    }
    gsap.to(window, {
      scrollTo: {
        y: sectionSelectors[i],
        offsetY: 80 + scrollToYpos[i]
      }
    });
    setTimeout(() => {
      for (let j = 0; j < mnLinks.length; j++) {
        mnLinks[j].style.pointerEvents = 'auto';
        ScrollTrigger.getById(`active mnLink scroll${j}`).enable();
      }
    }, 1000);
  }
  mnLinks.forEach((mnLink, i) => {
    mnLink.addEventListener('click', () => {
      scrollToSection(i);
    });
  });
}
