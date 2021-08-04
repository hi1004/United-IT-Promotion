<template>
  <Particles />
  <Intro />
  <SidebarMenu />
  <About />
  <Executives />
  <Activities />
</template>

<script>
  import Particles from '~/components/background/Particles';
  import Intro from '~/components/sections/Intro';
  import SidebarMenu from '~/components/etc/SidebarMenu';
  import About from '~/components/sections/About';
  import Executives from '~/components/sections/Executives';
  import Activities from '../components/sections/Activities.vue';
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
      SidebarMenu,
      Executives,
      Activities,
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
