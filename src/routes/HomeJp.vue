<template>
  <Particles />
  <Intro />
  <Activity2 />
</template>

<script>
  import Particles from '~/components/background/Particles';
  import Intro from '~/components/sections/Intro';
  import Activity2 from '~/components/sections/Activity2'
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
      Activity2
    },
  };
</script>

<style lang="scss" scoped>
  @import '~/scss/main';
</style>
