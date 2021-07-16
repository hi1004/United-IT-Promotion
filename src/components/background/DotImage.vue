<template>
  <canvas id="canvas"></canvas>
  <section
    id="scene"
    class="panel"
    data-parallax="scroll">
    <canvas
      id="particles"
      data-depth="0.5"> </canvas>

    <canvas
      id="canvas2"
      data-depth="0.6"></canvas>
  </section>
</template>

<script>
  // import canvas from '~/config/canvas';
  import dotImage from '~/config/background/dotImage';

  export default {
    mounted() {
      // canvas();
      dotImage();      
    },
  };
</script>

<style lang="scss" scoped>
  canvas {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index: -1;
  }
  #canvas {
    position: fixed;
    z-index: -1;
  }
  #canvas2 {
    z-index: -1;

  }
 
</style>
