<template>
  <canvas id="canvas"></canvas>
</template>

<script>
  import canvas from '~/config/canvas';

  export default {
    mounted() {
      canvas(); 
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
</style>
