export default function () {
  window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    // canvas.style.backgroundColor = 'lightgray';
    canvas.width = document.documentElement.clientWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: undefined,
      y: undefined,
    };
    const maxRadius = 40;
    // const minRadius = 2;

    const colorArray = ['#fdc000', '#BAE2CF', '#133543', '#9CC0CD', '#F08586'];

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      init();
    });

    const ctx = canvas.getContext('2d');

    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.minRadius = radius;
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
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

        if (
          mouse.x - this.x < 50 &&
          mouse.x - this.x > -50 &&
          mouse.y - this.y < 50 &&
          mouse.y - this.y > -50
        ) {
          if (this.radius < maxRadius) {
            this.radius += 1;
          }
        } else if (this.radius > this.minRadius) {
          this.radius -= 1;
        }
        this.draw();
      };
    }

    let circleArray = [];

    function init() {
      circleArray = [];
      for (let i = 0; i < 100; i++) {
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = Math.random() - 0.5;
        let dy = Math.random() - 0.5;
        let radius = Math.random() * 3 + 1;
        circleArray.push(new Circle(x, y, dx, dy, radius));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }
    init();
    animate();
  });
}
