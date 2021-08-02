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
        <span class="about__word">IT에&nbsp</span>
        <span class="about__word">관심이&nbsp</span>
        <span class="about__word">있거나</span>
        <br />
        <span class="about__word">일본&nbsp</span>
        <span class="about__word">취업을&nbsp</span>
        <span class="about__word">희망하는</span>
        <br />
        <span class="about__word">사람들의&nbsp</span>
        <span class="about__word">모임</span>
      </div>
 

      <!-- ABOUT-DESCRIPTION02 -->
      <div class="about__description description02">
        <span class="about__word02">저희</span>
        <br />
        <span class="about__word02">동아리를</span>
        <br />
        <span class="about__word02"><span class="word_em">소개</span>합니다</span>
        <span class="about__screamer">!</span>
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
        h1{
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
        font-size: 8vw;
        font-stretch: 50%;
        letter-spacing: -2px;
        line-height: 0.9;
        margin: 10rem 0;
      }
      .description01 {        
        .about__word {
          display: inline-block;             
          opacity: 0;     
          transition: 0.3s; 
          transform: translateY(20%);       
          &.word_show{
            opacity: 1;
            transform: translateY(0);
          }
        }        
      }
      .description02 {                
        .about__word02 {
          display: inline-block;             
          opacity: 0;     
          transition: 0.3s; 
          transform: translateY(20%);       
          &.word_show{
            opacity: 1;
            transform: translateY(0);
          }
          .word_em{
            color: #fdc000;
          }
        }
        .about__screamer {
          display: inline-block;             
          opacity: 0; 
          transition: 0.5s;
          transform: translateY(20%) scaleY(0.9);
          transition-timing-function: cubic-bezier(.1,-1,.6,3);          
          &.word_show{
            opacity: 1;
            transform: translateY(0) scaleY(1);
          }
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
