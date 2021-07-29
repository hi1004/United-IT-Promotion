<template>
  <div id="activity__container">
    <div class="btn__wrap">
      <button class="move_btn">
        1
      </button>        
      <button class="move_btn">
        2
      </button>        
      <button class="move_btn">
        3
      </button>
    </div>
    <h1 id="index_title">
      Activities
    </h1>   
    <div id="slide__container">
      <section class="slide index">             
      </section>
      <section class="slide first">
        <b>FIRST</b>
      </section>
      <section class="slide second">
        <b>SECOND</b>
      </section>
      <section class="slide third">
        <b>THIRD</b>
      </section> 
    </div>
  </div>
</template>

<script>
  // import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper.scss';
  import 'swiper/components/pagination/pagination.min.css';
  import SwiperCore, { Mousewheel, Pagination } from 'swiper/core';
  import 'swiper/swiper-bundle.css';
  
  
  SwiperCore.use([Mousewheel, Pagination]);

  export default {
    components: {
      // Swiper,
      // SwiperSlide,
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
 #activity__container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .btn__wrap{
    bottom: 5vh;
    left: 40vw;
    width: 20vw;
    height: 10vw;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: space-between;
    z-index: -1;
    opacity: 0;
    transition: 0.5s;
    &.btn_active{
      opacity: 1;
      z-index: 10000;
    }
    .move_btn{
      width: 5vw;
      height: 5vw;
      border: none;
      border-radius: 50%;
      text-align: center;        
      color: white;
      background-color: black;
    }  
  }
  #index_title{
    position: absolute;
    left: 1vw;
    top: 1vh;
    font-size: 20vw;
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
    font-size: 60px;
    text-align: center;
    color: #fff;    
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
