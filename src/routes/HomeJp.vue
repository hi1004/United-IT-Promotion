<template>
  <Intro />
  <Particles />
  일본어 페이지
</template>

<script>
  import Particles from '~/components/background/Particles'
  import Intro from '~/components/sections/Intro'
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
     
     
    }
  };
</script>

<style lang="scss" scoped>
</style>
