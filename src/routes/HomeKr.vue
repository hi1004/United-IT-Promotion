<template>
  <Particles />
  <Intro />
  <div class="home-background">
    <About />
    <Swiper />
  <!-- <Activiy /> -->
  </div>
</template>

<script>
  import Particles from '~/components/background/Particles';
  import Intro from '~/components/sections/Intro';
  import About from '~/components/sections/About';
  import Swiper from '~/components/sections/Swiper';
  import common from '~/config/common';
  import home from '~/config/routes/home';
 
  export default {
    mounted() {
      common();
      home();
    },
    components: {
      Intro,
      Particles,
      About,
      Swiper,
      // Activiy,
    },
  };
</script>

<style lang="scss" scoped>
  @import '~/scss/main';
  .home-background {
    position: relative;
    z-index: 99;
    background-color: black;
  }
</style>
