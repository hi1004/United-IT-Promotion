<template>
  <Intro />
  <Particles /> 
  <!-- <Activiy /> -->
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
