import { TweenMax, Power4 } from 'gsap';
export default function () {
  let windowWidth, windowHeight;
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;

  const introStage = document.querySelector('.intro-stage');
  const logoAb = document.querySelectorAll('.ab');
  const st = function () {
    spreadRandom();	
		setTimeout(function () {
      spreadRandom();	
    }, 1000);
		// setTimeout(function () {
    //   spreadRandom();	
    // }, 2000);
		setTimeout(function () {
      spreadReset();
    }, 2000);
		

  };

  function spreadReset() {
    logoAb.forEach(function (item, i) {
      TweenMax.to(item, 1, {
        top: windowHeight / 2 - 50,
        left: windowWidth / 2 + 60 - 200,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        ease: Power4.easeInOut,
        delay: i * 0.15,
      });
    });
  }

  function spreadRandom() {
    logoAb.forEach(function (item) {
      TweenMax.to(item, 1, {
        top: Math.random() * (windowHeight - 300) + 100,
        left: Math.random() * (windowWidth - 300) + 100,
        rotationX: 'random(-60,60)', //Math.random()*30
        rotationY: 'random(-60,60)',
        rotationZ: 'random(-90,90)',
        //scale : Math.random() * .6 + .6,
        ease: Power4.easeOut,
        delay: 'random(0,.5)',
      });
    });
  }


  function resize() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    st();
  }

  window.addEventListener('resize', function () {
    resize();
  });

  introStage.addEventListener('click', spreadReset);
}
