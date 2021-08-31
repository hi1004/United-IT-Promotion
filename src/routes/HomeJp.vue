<template>
  <!-- <div class="padding"> -->
  <MobileNav />
  <Particles />
  <IntroJp />
  <SidebarMenu />
  <AboutJp />
  <ExecutivesJp />
  <ActivitiesJp />
  <ContactJp />
  <!-- </div> -->
</template>

<script>
  import Particles from '~/components/background/Particles';
  import IntroJp from '~/components/sections_jp/IntroJp';
  import SidebarMenu from '~/components/etc/SidebarMenu';
  import AboutJp from '~/components/sections_jp/AboutJp';
  import ExecutivesJp from '~/components/sections_jp/ExecutivesJp';
  import ActivitiesJp from '../components/sections_jp/ActivitiesJp';
  import ContactJp from '../components/sections_jp/ContactJp';
  import MobileNav from '../components/mobile/MobileNav.vue';
  import common from '~/config/common';
  import home from '~/config/routes/home';

  export default {
    mounted() {
      common();
      home();
    },
    components: {
      IntroJp,
      Particles,
      AboutJp,
      SidebarMenu,
      ExecutivesJp,
      ActivitiesJp,
      ContactJp,
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
