import _ from 'lodash';
import { gsap } from "gsap";
import scrollTo from 'gsap/ScrollToPlugin';
import $ from 'jquery';
import ScrollTrigger from 'gsap/ScrollTrigger'

const Parallax = require('parallax-js');

gsap.registerPlugin(scrollTo);
gsap.registerPlugin(ScrollTrigger);





export default function () {

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
  

/* 화면 전환 */
//   let sections = gsap.utils.toArray(".panel"),
//     currentSection = sections[0];

// gsap.defaults({overwrite: 'auto', duration: 0.3});

// gsap.set("body", {height: (sections.length * 100) + "%"});

// sections.forEach((section, i) => {
//   ScrollTrigger.create({
//     // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
//     start: () => (i - 0.5) * innerHeight,
//     end: () => (i + 0.5) * innerHeight,
//     // when a new section activates (from either direction), set the section accordinglyl.
//     onToggle: self => self.isActive && setSection(section)
//   });
// });

// function setSection(newSection) {
//   if (newSection !== currentSection) {
//     gsap.to(currentSection, {scale: 0.5, autoAlpha: 0.1})
//     gsap.to(newSection, {scale: 1, autoAlpha: 1});
//     currentSection = newSection;
//   }
// }
// // handles the infinite part, wrapping around at either end....
// ScrollTrigger.create({
//   start: 1,
//   end: () => ScrollTrigger.maxScroll(window) - 1,
//   // onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
//   // onLeave: self => self.scroll(2)
// }).scroll(2);







  
}



