<template>
  <section>
    <div class="container">
      <h1>
        Home
        <span>hello</span>
      </h1>
      
      
      <div class="box">
        <h2>창공을 누비다!</h2>
      </div>
    </div>
  </section>


  <!-- VIDEO -->
  <section class="video">
  </section>
</template>

<script>

export default {
  
}
</script>



<style lang="scss" scoped>
  @import '~/scss/common.scss';
  section {
    // margin-top: 150px;
    padding-top: 150px;
 
  }
  .box {
    height: 300px;
    // background-color: gray;
    margin: 0 auto;
    position: relative;
  }
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
  }
  
</style>
