<template>
  <MobileNav />
  <Particles />
  <Intro />
  <SidebarMenu />
  <About />
  <Executives />
  <Activities />
  <Contact />
</template>

<script>
  import Particles from '~/components/background/Particles';
  import Intro from '~/components/sections/Intro';
  import SidebarMenu from '~/components/etc/SidebarMenu';
  import About from '~/components/sections/About';
  import Executives from '~/components/sections/Executives';
  import Activities from '../components/sections/Activities.vue';
  import Contact from '../components/sections/Contact';
  import MobileNav from '../components/mobile/MobileNav.vue';
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
      Contact,
      MobileNav,
    },
  };
</script>

<style lang="scss" scoped>
  @import '~/scss/main';
  .home-background {
    position: relative;
    z-index: 99;
  }
  @media screen and (min-width: 769px) {
    
    .padding {
      transition: 0.5s;
      padding: 0 0 0 92px;
      &.body-padding {
        padding: 0;
      }
    }
  }
  
</style>
