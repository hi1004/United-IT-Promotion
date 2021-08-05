import _ from 'lodash';
import $ from 'jquery';
import { gsap } from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
const ScrollMagic = window.ScrollMagic;

gsap.registerPlugin(scrollTo);
gsap.registerPlugin(ScrollTrigger);

export default function () {
  /* LOADING */
  $(window).on('load', function () {
    $('#load').hide();
  });

  /* TO-TOP */
  const toTopEl = document.querySelector('#to-top');
  window.addEventListener(
    'scroll',
    _.throttle(() => {
      if (window.scrollY > 500) {
        gsap.to(toTopEl, 0.2, {
          x: 0,
          display: 'block',
        });
      } else {
        gsap.to(toTopEl, 0.2, {
          x: 100,
          display: 'none',
        });
      }
    }, 300)
  );
  toTopEl.addEventListener('click', () => {
    gsap.to(window, 0.2, {
      scrollTo: 0,
    });
  });

  /* NAV-BAR */
  const showAnim = gsap
    .from('.main-tool-bar', {
      yPercent: -100,
      paused: true,
      duration: 0.2,
    })
    .progress(1);

  ScrollTrigger.create({
    start: 'top top',
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse();
    },
  });

  const controller = new ScrollMagic.Controller();
  const spyEls = document.querySelectorAll('.scroll-spy');
  spyEls.forEach((spyEl) => {
    new ScrollMagic.Scene({
      triggerElement: spyEl,
      triggerHook: 0.7,
    })
      .setClassToggle(spyEl, 'show')
      .addTo(controller);
  });


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

 

} /* end */
