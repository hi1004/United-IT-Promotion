import _ from 'lodash';
import $ from 'jquery';
import { gsap } from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(scrollTo);
gsap.registerPlugin(ScrollTrigger);

export default function () {
  /* LOADING */
  const bodyEl = document.querySelector('body');
  $(window).on('load', function () {
    $('#load').hide();
    bodyEl.style.position = 'relative';
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

  window.addEventListener('resize', () => {
    if (window.innerWidth < 415) {
      toTopEl.style.position = 'absolute';
    } else {
      toTopEl.style.position = 'fixed';
    }
  })
  

  toTopEl.addEventListener('click', () => {
    gsap.to(window, 0.2, {
      scrollTo: 0,
    });
  });

  /* CURSOR */
  const cursorWrap = document.querySelector('#cursor__wrap');
  const cursors = cursorWrap.querySelectorAll('.cursor');

  /* detect mobile */
  let isMobile = false; 
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
  /* hide cursor on mobile browser */
  if (isMobile) {
    cursors.forEach((cursor)=>{
      cursor.style.opacity = 0;
    })
  }
  

  /* CURSOR MOVE AND TRAIL EFFECT */
  let aimX = 0;
  let aimY = 0;

  cursors.forEach((cursor, i) => {
    let currentX = 0;
    let currentY = 0;

    let speed = 0.4 - i * 0.01;

    const animate = function () {
      currentX += (aimX - currentX) * speed;
      currentY += (aimY - currentY) * speed;

      cursor.style.left = currentX + 'px';
      cursor.style.top = currentY + 'px';

      requestAnimationFrame(animate);
    };
    animate();
  });

  // let timer

  document.addEventListener('mousemove', function (e) {
    aimX = e.clientX;
    aimY = e.clientY;
    cursorWrap.classList.remove('cursor_hidden');
    cursorWrap.style.display = 'block';
    // clearTimeout(timer);
    // timer = setTimeout(()=>{cursorWrap.classList.add('cursor_hidden');},300);
  });
  document.addEventListener('mouseout', function () {
    cursorWrap.style.display = 'none';
  });

  /* HOVER EFFECT */
  const anchorEls = document.querySelectorAll('a');
  const hoverClassEls = document.querySelectorAll('.cursor__hover_el');

  const hoverEls = [...anchorEls, ...hoverClassEls];

  hoverEls.forEach((element) => {
    element.addEventListener('mouseover', () => {
      cursors.forEach((cursor) => {
        cursor.classList.add('hover');
      });
    });
    element.addEventListener('mouseout', () => {
      cursors.forEach((cursor) => {
        cursor.classList.remove('hover');
      });
    });
  });

  /* MOUSE CLICK EFFECT */
  window.addEventListener('click', () => {
    cursors.forEach((cursor) => {
      cursor.classList.add('click');
      setTimeout(() => {
        cursor.classList.remove('click');
      }, 500);
    });
  });

  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
      window.location.reload();
    });
  });
} /* end */
