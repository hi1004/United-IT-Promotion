const ScrollTrigger = window.ScrollTrigger;
const gsap = window.gsap;

export default function(){
	const sectionSelectors = ['#intro', '#about', '#executives', '#activities', '#contact']
	const mnLinks = document.querySelectorAll('.mobile-nav__link')

	/* active mobile link on click */
  function linkActiveOnClick() {    
    mnLinks.forEach((mnLink) => {
      mnLink.classList.remove('link_actived')
    });    
    this.classList.add('link_actived');         
  }
  mnLinks.forEach((mnLink) => {
    mnLink.addEventListener('click', linkActiveOnClick);
  })

	/* active mobile link on scroll */
	function linkActiveOnScroll() {    
    mnLinks.forEach((mnLink, i) =>{
      function enterSection() {
        mnLink.classList.add('link_actived')
      }
      function leaveSection() {
        mnLink.classList.remove('link_actived')        
      }
      ScrollTrigger.create({
        id: `active mnLink scroll${i}`, 
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

	/* scroll to */
	function scrollToSection(i){    
    for(let j=0; j<mnLinks.length; j++){
      mnLinks[j].style.pointerEvents = 'none';
      ScrollTrigger.getById(`active mnLink scroll${j}`).disable();
    }
    gsap.to(window, {
      scrollTo: sectionSelectors[i]
    })
    setTimeout(()=>{
      for(let j=0; j<mnLinks.length; j++){
        mnLinks[j].style.pointerEvents = 'auto';
        ScrollTrigger.getById(`active mnLink scroll${j}`).enable();
      }
    }, 1000)
  }
  mnLinks.forEach((mnLink, i) => {
    mnLink.addEventListener('click', ()=>{
      scrollToSection(i)
    })
  })
}