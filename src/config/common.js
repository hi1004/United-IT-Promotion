import _ from 'lodash';
import { gsap } from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';
import $ from 'jquery';
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
  /* SCROLL MAGIC */
  const spyEls = document.querySelectorAll('.scroll-spy');
  spyEls.forEach((spyEl) => {
    new ScrollMagic.Scene({
      triggerElement: spyEl,
      triggerHook: 0.7,
    })
      .setClassToggle(spyEl, 'show')
      .addTo(controller);
    // .addIndicators()
  });

 

} /* end */
