<template>
  <canvas
    id="star"
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
  #star {
    width: 100%;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index: -1;
    opacity: 0;
    display: none;
    overflow: hidden;
  }
  
</style>
