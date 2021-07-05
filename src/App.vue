<template>
  <Header />
  <RouterView />
  <Totop />
</template>

<script>

import Header from '~/components/Header'
import Totop from '~/components/Totop'

export default {
  components: {
    Header,
    Totop,
  }
}
</script>


<style lang="scss">
  @import "~/scss/main";
</style>