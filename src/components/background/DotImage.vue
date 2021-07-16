<template>
  <canvas id="star"></canvas>
  <section
    id="scene"
    class="panel"
    data-parallax="scroll">
    <canvas
      id="particles"
      data-depth="0.5"> </canvas>

    <canvas
      id="dotImage"
      data-depth="0.6"></canvas>
  </section>
</template>

<script>
  import stars from '~/config/stars';
  import dotImage from '~/config/background/dotImage';

  export default {
    mounted() {
      stars();
      dotImage();      
    },
  };
</script>

<style lang="scss" scoped>
#star {
  position: fixed;
  z-index: 9999;
}

  #canvas {
    position: fixed;
    z-index: -1;
  }
  #canvas2 {
    z-index: -1;

  }
 
</style>
