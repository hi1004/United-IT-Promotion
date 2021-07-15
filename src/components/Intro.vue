<template>
  <div
    class="intro-stage"
    data-depth="1">
    <div class="black"></div>
    <div class="ab main">
      <img
        src="../assets/Intro/m_J.png"
        alt="m_J" />
    </div>
    <div class="ab main">
      <img
        src="../assets/Intro/m_hyphen.png"
        alt="m_hyphen" />
    </div>
    <div class="ab main">
      <img
        src="../assets/Intro/m_B.png"
        alt="m_B" />
    </div>
    <div class="ab main">
      <img
        src="../assets/Intro/m_I.png"
        alt="m_I" />
    </div>
    <div class="ab main">
      <img
        src="../assets/Intro/m_T.png"
        alt="m_T" />
    </div>
    <div class="ab sub">
      <img
        src="../assets/Intro/s_U.png"
        alt="s_U" />
    </div>
    <div class="ab sub">
      <img
        src="../assets/Intro/s_N.png"
        alt="s_N" />
    </div>
    <div class="ab sub">
      <img
        src="../assets/Intro/s_I.png"
        alt="s_I" />
    </div>
    <div class="ab sub">
      <img
        src="../assets/Intro/s_T.png"
        alt="s_T" />
    </div>
    <div class="ab sub">
      <img
        src="../assets/Intro/s_E.png"
        alt="s_E" />
    </div>
    <div class="ab sub">
      <img
        src="../assets/Intro/s_D.png"
        alt="s_D" />
    </div>
    <div class="ab sub">
    </div>
    <div class="ab sub">
      <img
        src="../assets/Intro/s_I.png"
        alt="s_I" />
    </div>
    <div class="ab sub">
      <img
        src="../assets/Intro/s_T.png"
        alt="s_T" />
    </div>
  </div>
</template>

<script>
  import intro from '~/config/intro.js';

  export default {
    mounted() {
      intro(); 
    },
  };
</script>

<style lang="scss" scoped>
 
  .intro-stage{
    position: relative;
    width: 100vw;
    height: 100vh;    
    z-index: -1;
    .black{
      position: fixed;
      width: 100vw;
      height: 100vh;
      background-color: black;
      transition: 1s;
      z-index: 100;
      &.hidden-black{
        opacity: 0;
        z-index: 0;
      }
    }  

    

    .ab{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
      &.main{
        width: 15vw;
        height: 15vw;
      }
      &.sub{
        width: 5vw;
        height: 5vw;
      }
      img{
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
  }
</style>
