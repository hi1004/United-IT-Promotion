<template>
  <div class="intro-stage">
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
    width: 100vw;
    height: 100vh;
    .ab{
      &.main{
        height: 10vw;        
        width: 10vw;
      }
      &.sub{
        width: 3vw;
        height: 3vw;
      }
      img{
        width: auto;
        height: 100%;
      }
    }
  }
</style>
