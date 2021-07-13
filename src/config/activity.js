export default function() {

  const ACTIVE_CLASS = 'showIt'
  const firstSlide = document.querySelector('.activity-item:first-child');
  const slider = document.querySelector('.activity-container');

  function slide(){
    const currentSlide = document.querySelector(`.${ACTIVE_CLASS}`);
    if (currentSlide) {
      currentSlide.classList.remove(ACTIVE_CLASS)
      const nextSlide = currentSlide.nextElementSibling;
      if(nextSlide){
        nextSlide.classList.add(ACTIVE_CLASS);
      } else{
        firstSlide.classList.add(ACTIVE_CLASS);
      }
    } else {
      firstSlide.classList.add(ACTIVE_CLASS);
    }
  }
  slide()
  slider.addEventListener('click', slide)

}