export default function(){

   /* CURSOR */
   const cursorWrap = document.querySelector('#cursor__wrap');
   const cursors = cursorWrap.querySelectorAll('.cursor')
   
   

   /* CURSOR MOVE AND TRAIL EFFECT */
   let aimX = 0;
   let aimY = 0;
   
   cursors.forEach((cursor, i)=>{
    let currentX = 0;
    let currentY = 0;

    let speed = 0.2 - i * 0.01

    const animate = function() {
      currentX += (aimX - currentX) * speed;
      currentY += (aimY - currentY) * speed;

      cursor.style.left = currentX + 'px';      
      cursor.style.top = currentY + 'px';

      requestAnimationFrame(animate);
    }
    animate();
   })
  
  let timer

  document.addEventListener('mousemove', function(e){
    aimX = e.clientX;
    aimY = e.clientY;
    cursorWrap.classList.remove('cursor_hidden')
    cursorWrap.style.display = 'block';
    clearTimeout(timer);
    timer = setTimeout(()=>{cursorWrap.classList.add('cursor_hidden');},300);
  })
  document.addEventListener('mouseout', function(){
    cursorWrap.style.display = 'none';
  })
  

   /* ANCHOR HOVER EFFECT */
   const anchorEls = document.querySelectorAll('a');

   anchorEls.forEach((anchor)=>{
    anchor.addEventListener('mouseover', ()=>{
      cursors.forEach((cursor)=>{
        cursor.classList.add('hover')
      })
      console.log('들어왔다');  
    })
    anchor.addEventListener('mouseout', ()=>{
      cursors.forEach((cursor)=>{
        cursor.classList.remove('hover')
      })
      console.log('나감');
    })
   })

   /* MOUSE CLICK EFFECT */
   window.addEventListener('click', ()=>{
     cursors.forEach((cursor)=>{
       cursor.classList.add('click')
       setTimeout(()=>{cursor.classList.remove('click')}, 500)
     })
   })
}
// end