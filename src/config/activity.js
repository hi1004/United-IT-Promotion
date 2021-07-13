export default function() {

  const activityItems = Array.from(document.querySelectorAll('.activity-item'))
  const activityTitleTexts = Array.from(document.querySelectorAll('#title-activity>text'))  


  window.addEventListener('scroll', scanElements)
  
  function scanElements(){
    activityTitleTexts.forEach(element =>{
      if(isVisable(element, 0, 1)){
        element.classList.add('title-effect');
      } else{
        element.classList.remove('title-effect')
      }		
    })

    activityItems.forEach(element =>{
      if(isVisable(element, 1, 1)){
        element.classList.add('slide-effect');
      } else{
        element.classList.remove('slide-effect')
      }		
    })
  }

  function isVisable(element, top=0.1, bottom=0.8){
    const elementItem = element.getBoundingClientRect();
    let distanceFromTop = -top * window.innerHeight;
    let distanceFromBottom = -bottom * window.innerHeight;
    return elementItem.top - window.innerHeight < distanceFromTop && elementItem.bottom - window.innerHeight > distanceFromBottom ? true : false;
  }

}