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
      <div class="video__bg">
        <video
          class="video__content"
          src="~/assets/video/Render.mp4"
          autoplay
          loop
          muted>
          <source
            src="data/comp.ogv"
            type="video/mp4" />
        </video>
      </div>

      <!-- ABOUT-DESCRIPTION01 -->
      <div class="about__description description01">
        <span class="about__word">IT에&nbsp;</span>
        <span class="about__word">관심이&nbsp;</span>
        <span class="about__word">있거나</span>
        <br />
        <span class="about__word">일본&nbsp;</span>
        <span class="about__word">취업을&nbsp;</span>
        <span class="about__word">희망하는</span>
        <br />
        <span class="about__word">사람들의&nbsp;</span>
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

      <!-- VIDEO INTRO -->
      <div class="video-poster back-to-position delay-0 to-top">
        <img
          src="~/assets/video/poster.png"
          alt="poster" />
        <span class="material-icons play-btn cursor__hover_el"> play_circle_filled </span>
      </div>
      <div class="video-intro">
        <video
          src="~/assets/video/intro_video.mp4"
          controls="true"
          playsinline
          muted>
          <source
            src="data/comp.ogv"
            type="video/mp4" />
        </video>

        <span class="material-icons close-btn cursor__hover_el"> close </span>
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
      color: #fff;
      .container {
        .about__title {
          h1 {
            font-size: 20vw;
            text-align: center;
          }
        }
        .video__bg {
          width: 100%;
          height: 55vw;
          display: flex;
          justify-content: center;
          .video__content {
            width: 100%;
            height: auto;
            position: absolute;
            left: 0;
            transform: scale(0.8);
          }
        }
        @media all and (min-width:769px) {
           .about__description {
          width: 90%;
          font-size: 8vw;
          font-stretch: 50%;
          letter-spacing: -2px;
          line-height: 0.9;
          margin: 10rem 0;
        }
        }
       
        .description01 {
          .about__word {
            display: inline-block;
            opacity: 0;
            transition: 0.3s;
            transform: translateY(20%);
            &.word_show {
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
            &.word_show {
              opacity: 1;
              transform: translateY(0);
            }
            .word_em {
              color: #fdc000;
            }
          }
          .about__screamer {
            display: inline-block;
            opacity: 0;
            transition: 0.5s;
            transform: translateY(20%) scaleY(0.9);
            transition-timing-function: cubic-bezier(0.1, -1, 0.6, 3);
            &.word_show {
              opacity: 1;
              transform: translateY(0) scaleY(1);
            }
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
        .video-poster {
          width: 100%;
          height: 100%;
          position: relative;
          img {
            width: 100%;
            display: block;
            opacity: 1;
          }
          .play-btn {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            cursor: pointer;
            font-size: 15vw;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fdc000;
            transition: 0.5s;
            background-color: rgba(0, 0, 0, 0.6);
            &:hover {
              opacity: 0.8;
              color: #fff;
            }
          }
        }
        .video-intro {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 9999;
          background-color: rgba(0, 0, 0, 0.85);
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          visibility: hidden;
          opacity: 0;
          &.video-active {
            visibility: visible;
            opacity: 1;
          }
          video {
            width: 80%;
            outline: none;
          }
          .close-btn {
            position: absolute;
            top: 30px;
            right: 30px;
            cursor: pointer;
            z-index: 10000;
            color: #fdc000;
            transition: 0.5s;
            font-size: 5vw;
            &:hover {
              color: #fff;
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

  // @media screen and (max-width: 768px) {
  //   .video-intro video {
  //     width: 100%;
  //   }
  // }
  @media all and (max-width: 574px) {
     .about__description {
          width: 100%;
          font-size: 4rem;
          font-stretch: 50%;
          letter-spacing: -2px;
          line-height: 0.9;
          margin: 20rem 0;
          text-align: center;
        }
  } 
  @media all and (min-width: 575px) and (max-width: 768px) {
    .about__description {
      width: 100%;
      font-size: 3rem;
      text-align: center;
      margin: 15rem 0;
      line-height: 0.9;
    }
  }

   @media all and (max-width: 768px) {
     .about__section {
      position: relative;
      font-family: 'Black Han Sans', sans-serif;
      color: #fff;
      .container {
        .about__title {
          h1 {
            font-size: 20vw;
            text-align: center;
          }
        }
       
        .description01 {
          .about__word {
            display: inline-block;
            opacity: 0;
            transition: 0.3s;
            transform: translateY(20%);
            &.word_show {
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
            &.word_show {
              opacity: 1;
              transform: translateY(0);
            }
            .word_em {
              color: #fdc000;
            }
          }
          .about__screamer {
            display: inline-block;
            opacity: 0;
            transition: 0.5s;
            transform: translateY(20%) scaleY(0.9);
            transition-timing-function: cubic-bezier(0.1, -1, 0.6, 3);
            &.word_show {
              opacity: 1;
              transform: translateY(0) scaleY(1);
            }
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
        .video-poster {
          width: 100%;
          height: 100%;
          position: relative;
          img {
            width: 100%;
            display: block;
            opacity: 1;
          }
          .play-btn {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            cursor: pointer;
            font-size: 15vw;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fdc000;
            transition: 0.5s;
            background-color: rgba(0, 0, 0, 0.6);
            &:hover {
              opacity: 0.8;
              color: #fff;
            }
          }
        }
        .video-intro {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 9999;
          background-color: rgba(0, 0, 0, 0.85);
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          visibility: hidden;
          opacity: 0;
          &.video-active {
            visibility: visible;
            opacity: 1;
          }
          video {
            width: 100%;
            outline: none;
          }
          .close-btn {
            position: absolute;
            top: 30px;
            right: 30px;
            cursor: pointer;
            z-index: 10000;
            color: #fdc000;
            transition: 0.5s;
            font-size: 5vw;
            &:hover {
              color: #fff;
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
   }
   @media screen and (max-width: 415px) {
     .video__bg {
       display: none !important;
     }
   }
     
   
   
</style>
