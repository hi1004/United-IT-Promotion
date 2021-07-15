<template>
  <Loading />
  <Header />
  <Canvas_copy />
  <!-- <Canvas />   -->
  <!-- <Intro /> -->
  <RouterView />
  <AboutUs />
  <Totop />
  <Footer />
</template>

<script>

import Header from '~/components/Header'
import Totop from '~/components/Totop'
import Footer from '~/components/Footer'
// import Canvas from '~/components/Canvas'
import Canvas_copy from '~/components/Canvas_copy'
// import Intro from '~/components/Intro'
import AboutUs from '~/components/AboutUs'
import Loading from '~/components/Loading'
export default {
  components: {
    Loading,
    Header,
    Canvas_copy,
    // Canvas,
    // Intro,
    AboutUs,
    Totop,
    Footer,
  },

}
</script>


<style lang="scss">
  @import "~/scss/main";
</style>