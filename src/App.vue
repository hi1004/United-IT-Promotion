<template>
  <Header />
  <RouterView />
  <Totop />
  <Footer />
</template>

<script>

import Header from '~/components/Header'
import Totop from '~/components/Totop'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Totop,
    Footer
  }
}
</script>


<style lang="scss">
  @import "~/scss/main";
</style>