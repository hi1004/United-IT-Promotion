<template>
  <div id="load">
    <img
      src="~/assets/loading.png"
      alt="loading" />
  </div>
</template>

<style lang="scss" scoped>
  #load {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    display: block;
    opacity: 1;
    z-index: 9999;
    text-align: center;
     background-color:transparent;
  }
  #load > img {
  
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    background-color:transparent;
   
  }
</style>
