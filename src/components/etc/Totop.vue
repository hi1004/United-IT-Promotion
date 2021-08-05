<template>
  <a
    class="btn btn-outline-primary"
    id="to-top">
    Top
  </a>
</template>

<script>
import common from '~/config/common'

export default {
  mounted() {
    common()
  }
}
</script>

<style lang="scss" scoped>
  @import '~/scss/main';
  #to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: none;
    cursor: pointer;
    z-index: 99;
    cursor: pointer;
  }
</style>
