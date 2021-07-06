<template>
  <section>
    <div class="container">
      <h1>
        Home
        <span>hello</span>
      </h1>
      <h2>창공을 누비다!</h2>
      <div class="box"></div>
    </div>
  </section>

  <!-- VIDEO -->
  <section class="video">
  </section>
</template>

<script>
  export default {
    mounted() {},
  };
</script>

<style lang="scss" scoped>
  @import '~/scss/common.scss';
  .box {
    height: 300px;
    background-color: gray;
  }
  
</style>
