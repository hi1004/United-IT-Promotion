<template>
  <Header />
  <Canvas_copy />  
  <Intro />
  <RouterView />
  <Totop />
  <Footer />
</template>

<script>

import Header from '~/components/Header'
import Totop from '~/components/Totop'
import Footer from '~/components/Footer'
// import Canvas from '~/components/Canvas'
import Canvas_copy from '~/components/Canvas_copy'
import Intro from '~/components/Intro'
export default {
  components: {
    Header,
    Canvas_copy,
    Intro,
    Totop,
    Footer,
  },

}
</script>


<style lang="scss">
  @import "~/scss/main";
</style>