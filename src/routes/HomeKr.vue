<template>
  <Intro />
  <Particles /> 
  <!-- <Activiy /> -->
  <a
    id="kakao-add-channel-button"
    href="#"
    onclick="void addChannel();">
    dddddddddddddd
    <img
      src="/tool/resource/static/img/button/channel/add/channel_add_small.png" />
  </a>
</template>

<script>
  import Particles from '~/components/background/Particles'
  import Intro from '~/components/sections/Intro'
  // import Activiy from '~/components/sections/Activity';

  import common from '~/config/common';
  import home from '~/config/routes/home';
  export default {
    mounted() {
      common();
      home();
   console.log(document.getElementById('kakao-add-channel-button'))
    },
    components : {
      Intro,
      Particles,
      // Activiy,     
    }
  };
</script>

<style lang="scss" scoped>
@import '~/scss/main';
</style>
