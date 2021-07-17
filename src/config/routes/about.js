import { gsap } from 'gsap';

  


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
}