<template>
  <canvas
    id="canvas">
  </canvas>
</template>

<script>
import draw from '~/config/canvas'
  export default {
    mounted() {
      draw()
    },
  };
</script>

<style lang="scss" scoped>
#canvas {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>