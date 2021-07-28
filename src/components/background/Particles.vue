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
      const ScrollMagic = window.ScrollMagic;
      const controller = new ScrollMagic.Controller();
      new ScrollMagic.Scene({
      triggerElement: '#about',
      triggerHook: 0.5,
    })
      .setPin('#scene', { pushFollowers: true })
      .addTo(controller);
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
