<template>
  <a
    class="btn btn-outline-primary"
    id="to-top">
    Top
  </a>
</template>

<script>
export default {
  mounted() {    
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
    z-index: 9998;
    cursor: pointer;
  }
  @media all and (max-width: 415px){
   #to-top {
     bottom: 120px;
     right: 20px;
   }
  }
</style>
