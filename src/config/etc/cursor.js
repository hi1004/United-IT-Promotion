export default function(){

   /* CURSOR */
   const cursor = document.getElementById('cursor');
   let timeout;
  //  let currentX = 0;
  //  let currentY = 0;
  //  let aimX = 0;
  //  let aimY = 0;
  //  let speed = 0.01;

   function mouseStopped() {
     cursor.style.display = 'none';
   }
   clearTimeout(timeout);
   timeout = setTimeout(mouseStopped, 1000)

   document.addEventListener('mousemove', function(e){
     const x = e.clientX;
     const y = e.clientY;
     cursor.style.left = x + 'px';
     cursor.style.top = y + 'px';
     cursor.style.display = 'block';
   })
   document.addEventListener('mouseout', function(){
     cursor.style.display = 'none';
   })




   /* css */

   const logoEl = document.querySelector('.logo')

   logoEl.addEventListener('mouseover', function(){
     cursor.style.width = '100px';
     cursor.style.height = '100px';
     cursor.style.cursor = 'none';
   })
}
// end