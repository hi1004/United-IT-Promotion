

export default function() {
  
  let historyItems = Array.from(document.querySelectorAll('.history-item'))
  let historyTitleTexts = Array.from(document.querySelectorAll('#title-history>text'))

  window.addEventListener('scroll', scanElements)

  function scanElements(){
	historyTitleTexts.forEach(element =>{
		if(isVisable(element, 0, 1)){
			element.classList.add('title-effect');
		} else{
			element.classList.remove('title-effect')
		}		
	})
	historyItems.forEach(element =>{
		if(isVisable(element)){
			element.classList.add('year-effect');
		} else{
			element.classList.remove('year-effect')
		}

	if(isVisable(element, 0.45, 0.55)){
			element.classList.add('year-focus');
		} else{
			element.classList.remove('year-focus')
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

