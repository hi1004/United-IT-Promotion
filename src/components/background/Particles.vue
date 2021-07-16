<template>
  <canvas
    id="particles"
    class="bg-canvas"> </canvas>
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
  position: absolute;
  top: 0;
  opacity: 0;
}
</style>
