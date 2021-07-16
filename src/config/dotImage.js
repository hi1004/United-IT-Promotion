export default function () {
  const canvas = document.querySelector('#dotImage');
  // canvas.style.border = '1px solid green'
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let particlesArray = [];

  let png ;

  const mouse = {
    x: undefined,
    y: undefined,
    radius: 100,
  };

  window.addEventListener('mousemove', (event) => {
    mouse.x = event.x + canvas.clientLeft / 2;
    mouse.y = event.y + canvas.clientTop / 2;
  });

  function drawImage() {
    let imageWidth = png.width;
    let imageHeight = png.height ;
    const data = ctx.getImageData(0, 0, imageWidth, imageHeight); 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    class Particle {
      constructor(x, y, color, size) {
        (this.x = x + canvas.width / 2 - png.width * 2),
          (this.y = y + canvas.height / 2 - png.height * 1.5),
          (this.color = color),
          (this.size = size),
          (this.baseX = x + canvas.width / 2 - png.width * 2),
          (this.baseY = y + canvas.height / 2 - png.height * 2),
          (this.density = Math.random() * 10 + 2);
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.closePath();
        ctx.fill();
      }

      update() {
        ctx.fillStyle = this.color;
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;

        const maxDistance = 100;
        let force = (maxDistance - distance) / maxDistance;
        if (force < 0) force = 0;

        let directionX = forceDirectionX * force * this.density * 1.6;
        let directionY = forceDirectionY * force * this.density * 1.6;

        if (distance < mouse.radius + this.size) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 20;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 20;
          }
        }
        this.draw();
      }
    }
    function init() {
      particlesArray = [];

      for (let y = 0, y2 = data.height; y < y2; y++) {
        for (let x = 0, x2 = data.width; x < x2; x++) {
          if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
            let positionX = x;
            let positionY = y;
            let color = `rgba(${data.data[y * 4 * data.width + x * 4]},
                              ${data.data[y * 4 * data.width + x * 4 + 1]},
                              ${data.data[y * 4 * data.width + x * 4 + 2]})`;
            particlesArray.push(new Particle(positionX * 4, positionY * 4, color, 2));
          }
        }
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.fillStyle = `#171818`;
      ctx.fillRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
    }

    init();
    animate();
   

    window.addEventListener('resize', () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      text()
      init();
    });
  }
  function text() {
    let moPng =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAZCAYAAACmRqkJAAAACXBIWXMAAC4jAAAuIwF4pT92AAAHJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA3LTA2VDIxOjQyOjU4KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNy0xMFQwNjo1ODo0OSswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNy0xMFQwNjo1ODo0OSswOTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3ZDZiZjI0Ni02M2RmLWQzNDMtYmYyNS0yNjg1MDJmMzc3NmMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5MDQxMDE2Zi0xYmFkLTcyNGItYTIzNi00N2E5YjlmYWUwZWUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZGI5N2ZmNC02N2I2LTJiNGYtYTUwYi1mOGRhN2NiMTIxM2QiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJkYjk3ZmY0LTY3YjYtMmI0Zi1hNTBiLWY4ZGE3Y2IxMjEzZCIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0wNlQyMTo0Mjo1OCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVjYWU5YWZhLThmOGYtZjM0Ni1iZWRlLWNiODNiZTZlNzYyMyIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0wNlQyMjoxMjozMyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZDZiZjI0Ni02M2RmLWQzNDMtYmYyNS0yNjg1MDJmMzc3NmMiIHN0RXZ0OndoZW49IjIwMjEtMDctMTBUMDY6NTg6NDkrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIv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';
    let pcPng =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABOCAYAAAAJtwteAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA3LTA2VDIxOjQyOjU4KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNy0wNlQyMjoxMjozMyswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNy0wNlQyMjoxMjozMyswOTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplY2FlOWFmYS04ZjhmLWYzNDYtYmVkZS1jYjgzYmU2ZTc2MjMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiZWM4YWZjOC01MzQ5LTEyNGUtYjQwZC1kN2IyMDM3MDc3NGYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZGI5N2ZmNC02N2I2LTJiNGYtYTUwYi1mOGRhN2NiMTIxM2QiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJkYjk3ZmY0LTY3YjYtMmI0Zi1hNTBiLWY4ZGE3Y2IxMjEzZCIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0wNlQyMTo0Mjo1OCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVjYWU5YWZhLThmOGYtZjM0Ni1iZWRlLWNiODNiZTZlNzYyMyIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0wNlQyMjoxMjozMyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlQmpA8AAAstSURBVHic7Z09bBzHGYaf0ak04FOXzmdAvVapDXDpyh2PRnodjZRGRKVKYZgk4MJVSAWpw1OqFIZ16lSFI8C9Vr0Drzp12QBqF5NiZqm7093tz83u7M88AEHybnb2vb19d/6+mRE4IpUE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';

    function pngs(src) {
     png = new Image();
      png.src = src;
    }

    if (canvas.width < 860) {
      pngs(moPng);
      moPng = ''
    } 
    else {
      pngs(pcPng);
      pcPng = ''
    }
  }
  text();

  window.addEventListener('load', () => {
    console.log('page has loaded');
    ctx.drawImage(png, 0, 0);
    drawImage();
    
  });
}
