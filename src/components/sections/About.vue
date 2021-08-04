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
        <div class="video-title">
          Independent manufacturing
        </div>
        <div class="video-bg">
          <video
            src="~/assets/video/intro_video.mp4"
            autoplay
            loop
            muted>
            <source
              src="data/comp.ogv"
              type="video/mp4" />
          </video>
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
   
      <div class="video-intro">
        <div class="btn play-btn">
          <span class="material-icons play-btn"> play_circle_filled </span>
        </div>
        <div class="btn close-btn">
          <span class="material-icons">
            close
          </span>
        </div>

        <div class="intro-video-wrap">
          <video
            src="~/assets/video/intro_video.mp4"
            muted>
            <source
              src="data/comp.ogv"
              type="video/mp4" />
          </video>
        </div>
      </div>

      <div class="spacer sp2"></div>
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
      .about__title {
        h1 {
          font-size: 20vw;
          text-align: center;
          margin-top: 10rem;
        }
      }
      .about__description {
        width: 90%;
        font-size: 10vw;
        letter-spacing: -2px;
        line-height: 0.9;
        margin: 10rem 0;
      }
      .description01 {
        margin-top: 100%;
      }
      .description02 {
        span.play-btn {
          color: #fdc000;
        }
      }
      .video-wrap {
        width: 100%;
        height: 40vw;
        position: relative;
        transform: scale(0.9);
        .video-bg,
        .video-title {
          position: absolute;
          width: 100%;
          left: 50%;
          transform: translateX(-50%);
          video {
            width: 100%;
          }
        }
      }
      .video-intro {
        width: 100%;
        position: relative;
        .play-btn {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          &:hover {
            opacity: .8;
          }
          span {
            color: #fdc000;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15vw;
            
          }
        }
        .close-btn {
           position: absolute;
            z-index: 1;
            display: none;
            top: 10%;
            right: 0%;
          span {
           color: #fdc000;
           font-size: 5vw;
          }
        }

        .intro-video-wrap {
          video {
            width: 100%;
            transition: all 0.5s;
          }
        }
        
      }
      .spacer.sp2 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10px;
      }
    }
  }
</style>
