export default function(){

   /* CURSOR */
   const cursorWrap = document.querySelector('#cursor__wrap');
   const cursors = cursorWrap.querySelectorAll('.cursor')
   
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

   document.addEventListener('mousemove', function(e){
    aimX = e.clientX;
    aimY = e.clientY;
    cursorWrap.style.display = 'block';
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
    })
    anchor.addEventListener('mouseout', ()=>{
      cursors.forEach((cursor)=>{
        cursor.classList.remove('hover')
      })
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