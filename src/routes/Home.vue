<template>
  <AboutUs />
  <!-- ACTIVIY -->
  <section class="activity-container">
    <Activiy />
  </section>
</template>

<script>
  // import History from '~/components/History';
  import Activiy from '~/components/Activity';
  import common from '~/config/common';
  import AboutUs from '~/components/AboutUs';
  export default {
    mounted() {
      common();
    },
    components : {
      // History,
      Activiy,
      AboutUs
    }
  };
</script>

<style lang="scss" scoped>
  section.int {
    margin-top: 150px;
  }
  .box {
    height: 500px;
    background-color: red;
  }
  .panel {
    width: 100%;
    height: 100%;
    margin-top: 100px;
  }
</style>
