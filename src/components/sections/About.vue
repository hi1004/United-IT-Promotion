<template>
  <section
    id="about"
    class="about">
    <div class="container">
      <!-- ABOUT-TITLE -->
      <div class="about__title">
        ABOUT
      </div>

      <!-- VIDEO-BG -->
      <div class="video-bg"></div>

      <!-- ABOUT-DESCRIPTION01 -->
      <div class="about__description description01">
        IT에 관심 있는 분들이나 일본취업을 희망하는 사람들의 모임
      </div>

      <!-- ABOUT-DESCRIPTION02 -->
      <div class="about__description description02">
        저희 동아리를 <br />
        <span>소개</span>합니다
      </div>

      <div class="video-intro"></div>
    </div>
  </section>
</template>

<script>
  export default {
    mounted() {},
  };
</script>

<style lang="scss" scoped>
  .about {
    position: relative;
    background-color: #fff;
    color: #000;
    font-family: 'Black Han Sans', sans-serif;
    padding: 2rem 0;
    .container {
      .about__title {
        font-size: 20vw;
        text-align: center;
      }
      .video-bg {
        height: 50vh;
        background-color: gray;
      }
      .about__description {
        width: 90%;
        font-size: 10vw;
        letter-spacing: -2px;
        line-height: 0.9;
        margin: 10rem 0;
      }
      .description01 {
       
      }
      .description02 {
        span {
          color: #fdc000;
        }
      }
      .video-intro {
        height: 50vh;
        background-color: gray;
      }
    }
  }
</style>
