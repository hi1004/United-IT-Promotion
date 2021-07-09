<template>
  <!-- <canvas
    id="canvas">
  </canvas> -->
  <canvas id="canvas1"> </canvas>
  <canvas id="canvas2"></canvas>
</template>

<script>
  // import canvas from '~/config/canvas'
  import particles from '~/config/particles';
  import canvas2 from '~/config/canvas2';
  export default {
    mounted() {
      // canvas()
      particles();
      canvas2();


      window.addEventListener('resize', () => {
      //  var width = window.innerWidth;
  

        // if (width > 1060) {
        //   !canvas2();
        // } else {
        //  particles();
        // }
      });

    },
  };
</script>

<style lang="scss" scoped>
  canvas {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  #canvas1 {
    z-index: 1;
  }
  #canvas2 {
    z-index: 0;
  }
</style>
