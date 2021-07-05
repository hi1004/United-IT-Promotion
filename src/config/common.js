import _ from 'lodash'
import  gsap  from "gsap";
import scrollTo from 'gsap/ScrollToPlugin'
gsap.registerPlugin(scrollTo); 

export default function() {
  // to-top 
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(() => {
    if (window.scrollY > 500) {
      gsap.to(toTopEl, 0.2, {
        x: 0,
        display: 'block'
      });
    } else {
      gsap.to(toTopEl, 0.2, {
        x: 100,
        display: 'none'
      });
    }
  }, 300)
);

toTopEl.addEventListener('click', () => {
  gsap.to(window, 0.2, {
    scrollTo: 0,
  });
})
}