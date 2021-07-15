<template>
  <canvas id="canvas"></canvas>
  <section class="intro-section">
    <canvas
      id="particles"
      data-depth="0.5"> </canvas>
    <Intro />
  </section>
</template>

<script>
  import canvas from '~/config/canvas';
    import particles from '~/config/particles';
    import Intro from '~/components/Intro'

  export default {
    mounted() {
      canvas(); 
      particles()
    },
    components : {
      Intro
    }
  };
</script>

<style lang="scss" scoped>

  .intro-section {
    width: 100%;
    height: 100vh;
    
  }
  canvas {
    width: 100vw;
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
