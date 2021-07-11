export default function() {

  let historyItems = Array.from(document.querySelectorAll('.history-item'))

  window.addEventListener('scroll', scanElements)

  function scanElements(){
    historyItems.forEach(element =>{
      if(isVisable(element)){
        element.classList.add('active');
      } else{
        element.classList.remove('active')
      }      
    })
  }

  function isVisable(element){
    const elementItem = element.getBoundingClientRect();
    let distanceFromTop = -0.1 * window.innerHeight;
    let distanceFromBottom = -0.9 * window.innerHeight;
    return elementItem.top - window.innerHeight < distanceFromTop && elementItem.top - window.innerHeight > distanceFromBottom ? true : false;
  }  
}

