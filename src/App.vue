<template>
  <div id="cursor"></div>
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
  #cursor {
    position: fixed;
    z-index: 10000;
    background: #2696e8;
    width: 20px;
    height: 20px;
    // border: 2px solid #fff;
    // background-color: #fff;
    box-sizing: border-box;
    transition: 0.1s;
    border-radius: 50%;
    pointer-events: none;
    display: block;
    box-shadow: 0 0 20px #2696e8,
                0 0 60px #2696e8,
                0 0 100px #2696e8;
    animation: colors 5s infinite;
  }

  @keyframes colors {
    from {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(360deg);
    }
  }

  #cursor::before {
    content: '';
    position: absolute;
    background: #2696e8;
    width: 50px;
    height: 50px;
    opacity: 0.2;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

</style>
