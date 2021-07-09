<template>
  <Header />
  <Canvas />
  <RouterView />
  <Totop />
  <Footer />
</template>

<script>

import Header from '~/components/Header'
import Totop from '~/components/Totop'
import Footer from '~/components/Footer'
import Canvas from '~/components/Canvas'
export default {
  components: {
    Header,
    Canvas,
    Totop,
    Footer,
  }
}
</script>


<style lang="scss">
  @import "~/scss/main";
</style>