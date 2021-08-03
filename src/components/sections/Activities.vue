<template>
  <div id="activities__container">
    <div class="btn__wrap">
      <button class="move_btn">
      </button>        
      <button class="move_btn">
      </button>        
      <button class="move_btn">
      </button>
    </div>
    <h1 id="index_title">
      Activities
    </h1>   
    <div id="slide__container">
      <section class="slide index">             
      </section>
      <section class="slide first">
        <h1 class="slide__title">
          First
        </h1>
        <div class="slide__image_section"></div>
      </section>
      <section class="slide second">
        <h1 class="slide__title">
          Second
        </h1>
        <div class="slide__image_section"></div>
      </section>
      <section class="slide third">
        <h1 class="slide__title">
          Third
        </h1>
        <div class="slide__image_section"></div>
      </section> 
    </div>
  </div>
</template>

<script>
  import 'swiper/swiper.scss';
  import 'swiper/components/pagination/pagination.min.css';
  import SwiperCore, { Mousewheel, Pagination } from 'swiper/core';
  import 'swiper/swiper-bundle.css';
  
  
  SwiperCore.use([Mousewheel, Pagination]);

  export default {
    components: {
    },
    data() {
      return {};
    },
    methods: {},
    mounted() {
    },
  };
</script>

<style lang="scss" scoped>
 #activities__container {
  width: 100%;
  height: 100vh;
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
        background-color: lightgray;
        box-shadow: 0 0 20px 1px lightgray;
      }
    }  
  }
  #index_title{
    position: absolute;
    left: 7vw;
    top: 5vh;
    font-family: 'Black Han Sans', sans-serif;
    font-size: 15vw;
    color: white;
  }
}

#slide__container {
  width: 400%;// 100*4 slides
  height: 100%;
  .slide {
    position: relative;
    float: left;
    width: 25%;
    height: 100vh;    
    overflow: hidden;
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
</style>
