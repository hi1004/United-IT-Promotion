<template>
  <section class="intro-section">
    <Particles />
    <canvas
      id="particles"
      class="bg-canvas"> </canvas>
  </section>
</template>
<script>
  import particle from '~/config/particles';

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
