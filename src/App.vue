<template>
  <Loading />
  <Background />
  <Header />
  <RouterView />
  <Totop />
  <Footer />
</template>

<script>

import Loading from '~/components/Loading'
import Background from '~/components/Background'
import Header from '~/components/Header'
import Totop from '~/components/Totop'
import Footer from '~/components/Footer'


export default {
  components: {
    Loading,
    Header,
    Background,
    Totop,
    Footer,
  },

}
</script>


<style lang="scss">
  @import "~/scss/main";
</style>