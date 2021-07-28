<template>
  <section
    id="about"
    class="about__section">
    <div class="container">
      <!-- ABOUT-TITLE -->
      <div class="about__title">
        <h1>ABOUT</h1>
      </div>

      <!-- VIDEO-BG -->
      <div class="video-wrap">
        <div class="video-bg">
        </div>
      </div>
      
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
      <div class="spacer"></div>
    </div>
  </section>
</template>

<script>
  export default {
    mounted() {},
  };
</script>

<style lang="scss" scoped>
  .about__section {
    position: relative;
    font-family: 'Black Han Sans', sans-serif;
    margin: 5rem 0;
    color: #fff;
    .container {
      position: relative;
      .about__title {
        h1 {
          font-size: 20vw;
        text-align: center;
        margin-top: 10rem;
        }
        
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
      .description02 {
        span {
          color: #fdc000;
        }
      }
      .video-intro {
        height: 50vh;
        background-color: gray;
      }
      .spacer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height:10px;
      }
    }
  }
</style>
