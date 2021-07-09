<template>
  <canvas id="canvas"></canvas>
  <div
    id="scene"
    data-parallax="scroll">
    <canvas
      id="canvas1"
      data-depth="0.5"> </canvas>
    <canvas
      id="canvas2"
      data-depth="0.6"></canvas>
  </div>
</template>

<script>
  import canvas from '~/config/canvas';
  import particles from '~/config/particles';
  import canvas2 from '~/config/canvas2';
  export default {
    mounted() {
      canvas();
      particles();
      canvas2();
    },
  };
</script>

<style lang="scss" scoped>
  canvas {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-attachment: fixed;
  }
  #canvas {
    position: fixed;
    z-index: 1;
  }
  #canvas2 {
    z-index: -1;
  }
 
</style>
