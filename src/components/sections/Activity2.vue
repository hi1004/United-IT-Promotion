<template>
  <section class="activity__container">
    <div class="activity__section"></div>
    <div class="activity__section"></div>
    <div class="activity__section"></div>
  </section>
</template>

<script>
import activity2 from '~/config/sections/activity2';
  export default {
    mounted() {
      activity2();
    },
  };
</script>

<style lang="scss" scoped>

.activity__container{
    background: lightgray;
    opacity: 0.5;
    .activity__section{
        margin: 5vh 0;       
        width: 100vw;
        height: 100vh; 
        background-color: lightyellow;
        opacity: 0.5;
    }
}

</style>