import { gsap } from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(scrollTo);
gsap.registerPlugin(ScrollTrigger);

const ScrollMagic = window.ScrollMagic;

export default function() {
  window.onload = function () {
    const bodyEl = document.querySelector('body')
    const toolBar = document.querySelector('.main-tool-bar');
    const starEl = document.querySelector('.bg-canvas');
      toolBar.classList.add('show-tool-bar');
      gsap.to(window, 0, {
      scrollTo: 0,
    });
    bodyEl.style.overflowY = 'visible';
    bodyEl.style.position = 'relative';
    starEl.style.opacity = 1
    starEl.style.display = 'block'
  };

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
  const spyEls = document.querySelectorAll('.back-to-position');
  spyEls.forEach((spyEl) => {
    new ScrollMagic.Scene({
      triggerElement: spyEl,
      triggerHook: 0.7,
    })
      .setClassToggle(spyEl, 'show')
      .addTo(controller);
  });
}