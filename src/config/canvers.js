export default function () {
  window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    // canvas.style.backgroundColor = 'lightgray';
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    const ctx = canvas.getContext('2d');


   
  

  
    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255,${Math.floor(Math.random() * 255)})`;
        ctx.fill();
      };
      this.update = function () {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      };
    }

    let circleArray = [];

    for (let i = 0; i < 50; i++) {
      
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let dx = (Math.random() - 0.5) ;
      let dy = (Math.random() - 0.5) ;
      let radius = 4;
      circleArray.push(new Circle(x, y, dx, dy, radius));
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      
      for (let i = 0; i< circleArray.length; i++) {
        circleArray[i].update();
      }
    }
    
    animate();







  });
  
}
