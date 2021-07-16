<template>
  <canvas
    id="canvas"
    class="bg-canvas"></canvas>
</template>

<script>
  import stars from '~/config/background/stars';
  export default {
    mounted() {
      stars(); 
    },
   
  };
</script>

<style lang="scss" scoped>

  
  canvas {
    width: 100vw;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index: -1;
    opacity: 0;

  }
  #canvas {
    position: fixed;
    z-index: -1;
  }
 
</style>
