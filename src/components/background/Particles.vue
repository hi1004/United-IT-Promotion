<template>
  <canvas
    id="particles"
    class="bg-canvas"
    data-depth="0.5"></canvas>
</template>
<script>
  import particle from '~/config/background/particles';

  export default {
    mounted() {
      particle();
  
    },
  };
</script>

<style lang="scss" scoped>
  #particles {
    width: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    display: none;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
  }
</style>
