<template>
  <section
    id="activities"
    class="activities__section">
    <div id="activities__container">
      <div class="btn__wrap">
        <button class="move_btn">
        </button>        
        <button class="move_btn">
        </button>        
        <button class="move_btn">
        </button>
      </div>  
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
      <div class="slide__space">
      </div>
      <div class="slide__space">
      </div>
      <div class="slide__space"></div>
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
 #activities__container {
  position: relative;
  overflow: hidden;
  .btn__wrap{
    bottom: 5vh;
    left: 45vw;
    width: 10vw;
    height: 5vw;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    z-index: -1;
    opacity: 0;
    transition: 0.5s;
    &.btn_active{
      opacity: 1;
      z-index: 10000;
    }
    .move_btn{
      width: 2vw;
      height: 2vw;
      border: none;
      border-radius: 50%;
      text-align: center;
      background-color: black;
      box-shadow: 0 0 10px 1px black;
      transition: 0.5s;
      &.btn_clicked{
        background-color: white;
        box-shadow: 0 0 20px 1px white;
      }
    }  
  }
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
