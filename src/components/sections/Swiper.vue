<template>
  <div
    id="animate"
    class="box1 blue">
    <p class="text">
      창공을 누비다!
    </p>
  </div>


  <div id="pinContainer">
    <div id="slideContainer">
      <section class="panel one">
        <b>ONE</b>
      </section>
      <section class="panel two">
        <b>TWO</b>
      </section>
      <!-- <section class="panel three">
        <b>THREE</b>
      </section>
      <section class="panel four">
        <b>FOUR</b>
      </section> -->
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
.box1 {
  text-align: center;
}
 .spacer {
    height: 150px;
  }
  
  .text {
    font-size: 14px;
    margin-bottom: 10px;
    line-height: 140%;
  }
  
  .icon {
    width: 140px;
    height: 140px;
    color: #fff;
    font-size: 40px;
    line-height: 140px;
    text-align: center;
    background-color: #999;
    border-radius: 100%;
    
  }


.trigger {
  width: 100%;
  height: auto;
  font-weight: bold;
  font-size: 20px;
  background-color: #bada77;
}
 #pinContainer {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  perspective: 1000;
}

#slideContainer {
  width: 200%;// 100*4 slides
  height: 100%;
}

.panel {
  float: left;
  width: 50%; // 200/25 = 100%
  height: 100vh;
  font-size: 60px;
  text-align: center;
  color: #fff;
}

// .one {
//     background-color: #fe4365;
// }

// .two {
//     background-color: #fc9d9a;
// }

// .three {
//     background-color: #f9cdad;
// }

// .four {
//     background-color: #c8c8a9;
// }


</style>
