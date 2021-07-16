import { gsap } from 'gsap';
export default function() {

  window.onload = function () {
    const bodyEl = document.querySelector('body')
    const toolBar = document.querySelector('.main-tool-bar');
      toolBar.classList.add('show-tool-bar');
      gsap.to(window, 0, {
      scrollTo: 0,
    });

    bodyEl.style.overflowY = 'visible';
    bodyEl.style.position = 'relative';

  };
}