<template>
  <div id="cursor__wrap">
    <div class="cursor"></div>
    <div class="cursor"></div>
    <div class="cursor"></div>
    <div class="cursor"></div>
    <div class="cursor"></div>
    <div class="cursor"></div>
    <div class="cursor"></div>
    <div class="cursor"></div>
    <div class="cursor"></div>
    <div class="cursor"></div>
    <div class="cursor"></div>
    <div class="cursor"></div>
  </div>
  <Loading />
  <Stars />
  <Header />
  <RouterView />
  <Totop />
  <Footer />
</template>

<script>
  import Loading from '~/components/etc/Loading';
  import Stars from '~/components/background/Stars';
  import Header from '~/components/header/Header';
  import Totop from '~/components/etc/Totop';
  import Footer from '~/components/footer/Footer';
  import cursor from '~/config/etc/cursor';
  export default {
    components: {
      Loading,
      Header,
      Stars,
      Totop,
      Footer,
    },
    mounted() {
      cursor()
    }
  };
</script>

<style lang="scss">
  @import '~/scss/main';
  #cursor__wrap{
    .cursor {
      position: fixed;
      z-index: 10000;
      background: white;
      width: 10px;
      height: 10px;
      box-sizing: border-box;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      pointer-events: none;
      display: block;
      box-shadow: 0 0 10px white,
                  0 0 15px white,
                  0 0 20px white;
      &.hover{        
        box-shadow: 0 0 10px white;
        background: transparent;
        animation-name: hover-effect;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-out;
      }
      &.click{
        box-shadow: 0 0 10px white;
        background: transparent;
         animation-name: click-effect;
        animation-duration: .5s;
        animation-iteration-count: 1;
        animation-timing-function: ease-out;
      }
    }
  }
  
  // @keyframes colors {
  //   from {
  //     filter: hue-rotate(0deg);
  //   }
  //   to {
  //     filter: hue-rotate(360deg);
  //   }
  // }

  @keyframes hover-effect {
    0% {
      width: 20px;
      height: 20px;
    }
    60% {
      width: 40px;
      height: 40px;
    }
    100% {
      width: 20px;
      height: 20px;
    }
  }

  @keyframes click-effect {
    from {
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    to{
      width: 70px;
      height: 70px;
      opacity: 0;
    }
  }

</style>
