<template>
  <div class="container">
    <History />
  </div>

  <!-- <section class="panel">
    <div class="box">
      <h2>창공을 누비다!</h2>
    </div>
  </section> -->
</template>

<script>
  import History from '~/components/History';
  import common from '~/config/common';
  export default {
    mounted() {
      common();
    },
    components : {
      History
    }
  };
</script>

<style lang="scss" scoped>
  @import '~/scss/common.scss';
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
  section:not(.first) {
    opacity: 0;
    visibility: hidden;
    transform: scale(0.8);
  }
</style>
