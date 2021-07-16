<template>
  <Intro />
  <Particles />
  <!-- ACTIVIY -->
  <section class="container activity-container">
    <Activiy />
  </section>
</template>

<script>
  import Particles from '~/components/Particles'
  import Intro from '~/components/Intro'
  import Activiy from '~/components/Activity';

  import common from '~/config/common';
  import home from '~/config/home'
  export default {
    mounted() {
      common();
      home();
    },
    components : {
       Intro,
      Particles,
      Activiy,
     
    }
  };
</script>

<style lang="scss" scoped>
</style>
