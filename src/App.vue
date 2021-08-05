<template>
  <div id="cursor__wrap">
    <div
      v-for="n in 10"
      :key="n"
      class="cursor">
    </div>
  </div>
  <Loading />
  <Stars />
  <!-- <Header /> -->
  <RouterView />
  <Totop />
  <Footer />
</template>

<script>
  import common from '~/config/common'
  import Loading from '~/components/etc/Loading';
  import Stars from '~/components/background/Stars';
  // import Header from '~/components/header/Header';
  import Totop from '~/components/etc/Totop';
  import Footer from '~/components/footer/Footer';
  export default {
    components: {
      Loading,
      // Header,
      Stars,
      Totop,
      Footer,
    },
    mounted() {
      common()
    },
    data() {
      return  {
        cursors : 10
      }
    }
  };
</script>

<style lang="scss">
  @import '~/scss/main';
  #cursor__wrap{    
    display: none;
    &.cursor_hidden{
      transition: 0.5s;
      opacity: 0;
    }
    .cursor {
      opacity: 0.5;
      position: fixed;
      z-index: 10000;
      background: white;
      width: 10px;
      height: 10px;
      box-sizing: border-box;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      pointer-events: none;
      box-shadow: 0 0 10px #fdc000,
                  0 0 15px #fdc000,
                  0 0 20px #fdc000,
                  0 0 25px #fdc000,
                  0 0 30px #fdc000;
      animation: colors 5s infinite;

      &.hover {
        box-shadow: 0 0 10px #fdc000;
        background: transparent;
        animation-name: hover-effect;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-out;
      }
      &.click {
        box-shadow: 0 0 10px #fdc000;
        background: transparent;
        animation-name: click-effect;
        animation-duration: 0.5s;
        animation-iteration-count: 1;
        animation-timing-function: ease-out;
      }
    }
  }

  @keyframes colors {
    from {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(360deg);
    }
  }

  @keyframes hover-effect {
    0% {
      filter: hue-rotate(0deg);
      width: 20px;
      height: 20px;
    }
    60% {
      filter: hue-rotate(360deg);
      width: 50px;
      height: 50px;
    }
    100% {
      filter: hue-rotate(0deg);
      width: 20px;
      height: 20px;
    }
  }

  @keyframes click-effect {
    from {
      filter: hue-rotate(0deg);
      width: 10px;
      height: 10px;
      opacity: 1;
    }
    to {
      filter: hue-rotate(360deg);
      width: 100px;
      height: 100px;
      opacity: 0;
    }
  }
</style>
