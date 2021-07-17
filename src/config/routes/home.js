import { gsap } from 'gsap';

export default function() {
  /* SCROLL DISABLE */
  const bodyEl = document.querySelector('body');
  const canvases = document.querySelectorAll('.bg-canvas');
  // bodyEl.style.backgroundColor = '#000';
  setTimeout(function () {
    bodyEl.style.overflowY = 'visible';
    bodyEl.style.position = 'relative';
    bodyEl.style.backgroundColor = '#171818';
    canvases.forEach(function (canvas) {
      gsap.to(canvas, 1, {
        opacity: 1,
        display: 'block'
      });
    });
  }, 2000);

  window.onload = function () {
    const toolBar = document.querySelector('.main-tool-bar');
    setTimeout(() => {
      toolBar.classList.add('show-tool-bar');
    }, 2000);
    
    gsap.to(window, 0, {
      scrollTo: 0,
    });
  };
}