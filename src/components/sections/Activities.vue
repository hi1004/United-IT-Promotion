<template>
  <section
    id="activities"
    class="activities__section">
    <div id="activities__container"> 
      <div class="slide__wrap">
        <section class="slide__content first">
          <h1 class="slide__title">
            First
          </h1>
          <div class="slide__image_section"></div>
        </section>
        <section class="slide__content second">
          <h1 class="slide__title">
            Second
          </h1>
          <div class="slide__image_section "></div>
        </section>
        <section class="slide__content third">
          <h1 class="slide__title">
            Third
          </h1>
          <div class="slide__image_section"></div>
        </section>
      </div>
      <div class="slide__space">
        <h1 id="slide__index_title">
          Activities
        </h1>         
      </div>
      <div
        id="first_space"
        class="slide__space">
      </div>
      <div
        id="second_space"
        class="slide__space second_space">
      </div>
      <div
        id="third_space"
        class="slide__space third_space"></div>
    </div>
  </section>
</template>

<script>
  export default {
    mounted() {
    }
  };
</script>

<style lang="scss" scoped>
.activities__section {
  position: relative;
   &::after, &::before {
    position: absolute;
    left: 0;
    content: '';
    width: 100%;
    height: 400px;
    margin-bottom: 255px;
  }
  &::after {
    bottom: -4.4%;
      background-color: blue;
      transform: skewY(-170deg);
  }
   &::before {
     top: -4.4%;
     background-color: red;
     transform: skewY(170deg);
   }
}
 #activities__container {
  position: relative;
  overflow: hidden;
  .slide__wrap {    
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 100;
    .slide__content {
      position: absolute;
      top: 0;
      left: 100%;
      width: 100%;
      height: 100vh;    
      overflow: hidden;
      z-index: 100;
      .slide__title {
        position: absolute;
        left: 7vw;
        top: 5vh;
        color: #000;
        font-size: 10vw;
        font-family: 'Black Han Sans', sans-serif;
      }
      .slide__image_section{
        width: 70%;
        height: 150%;
        background-color: lightgray;
        position: absolute;
        top: -5vh;
        right: -20vw;
        transform: rotate(10deg);
      }    
      &.index {
        background-color: transparent;
      }
      &.first {
        background-color: lightyellow;
      }
      &.second {
        background-color: lightpink;
      }
      &.third {
        background-color: lightcoral;
      }
    }
  }  
  .slide__space {
    position: relative;
    width: 100%;
    height: 100vh;
    #slide__index_title{
      position: absolute;
      left: 7vw;
      top: 5vh;
      font-family: 'Black Han Sans', sans-serif;
      font-size: 12vw;
      color: white;
    }    
  }
}


</style>
