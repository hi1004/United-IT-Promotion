<template>
  <Particles />
  <Intro />
  <Content />
</template>

<script>
  import Particles from '~/components/background/Particles';
  import Intro from '~/components/sections/Intro';
  import Content from '~/components/sections/Content'
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
      Content
    },
  };
</script>

<style lang="scss" scoped>
  @import '~/scss/main';
</style>
