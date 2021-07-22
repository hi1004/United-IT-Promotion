<template>
  <section class="content__container">
    <div class="content__section">
      <h1 class="content__title">
        About
      </h1>
    </div>
    <div class="content__section">
      <h1 class="content__title">
        Activity
      </h1>
    </div>    
    <div class="content__section"></div>
  </section>
</template>

<script>
import content from '~/config/sections/content';
  export default {
    mounted() {
      content();
    },
  };
</script>

<style lang="scss" scoped>

.content__container{
  opacity: 0.5;
  .content__section{
    position: relative;
    width: 100vh;
    height: 100vh; 
    background-color: rgba(64, 64, 64, 0.1);
    .content__title{
      position: absolute;
      top: 5vh;
      left: 5vw;
      color: white;
      font-size: 8vw;
      font-family: 'Black Han Sans', sans-serif;
      @media all and (min-width: 1200px) {
        font-size: 96px;
      }
    }
  }
}

</style>