<template>
  <Particles />
  <Intro />
  <About />
  <Executives />
  <Swiper />
</template>

<script>
  import Particles from '~/components/background/Particles';
  import Intro from '~/components/sections/Intro';
  import About from '~/components/sections/About';
   import Executives from '~/components/sections/Executives';
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
      Executives,
      Swiper,
    },
  };
</script>

<style lang="scss" scoped>
  @import '~/scss/main';
  .home-background {
    position: relative;
    z-index: 99;
  }
</style>
