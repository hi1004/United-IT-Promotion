
import _ from 'lodash';
import { gsap } from "gsap";
import scrollTo from 'gsap/ScrollToPlugin';
import $ from 'jquery';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollMagic from 'scrollmagic';

const Parallax = require('parallax-js');
gsap.registerPlugin(scrollTo);
gsap.registerPlugin(ScrollTrigger);

export default function () {


  
  const loadEl = document.querySelector('#load');
  window.addEventListener('load', () => {
    loadEl.fadeOut()
  })

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

  
  /* PARALLAX */
  $(function () {
    new Parallax($('#scene')[0]);
  });


  /* GSAP SCROLL */

  const showAnim = gsap.from('.main-tool-bar', { 
    yPercent: -100,
    paused: true,
    duration: 0.2
  }).progress(1);
  
  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });

  
/* SCROLL MAGIC */
const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
  








  
}



