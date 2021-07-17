<template>
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

  export default {
    components: {
      Loading,
      Header,
      Stars,
      Totop,
      Footer,
    },
  };
</script>

<style lang="scss">
  @import '~/scss/main';
</style>
