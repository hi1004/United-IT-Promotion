<template>
  <section
    id="about"
    class="about__section">
    <div class="container">
      <!-- ABOUT-TITLE -->
      <div class="about__title">
        <h1>
          <span class="about__title_word">A</span>
          <span class="about__title_word">B</span>
          <span class="about__title_word">O</span>
          <span class="about__title_word">U</span>
          <span class="about__title_word">T</span>
        </h1>
      </div>
      <div class="m_about__title">
        <div class="m_about__title_word">
          <span>A<br />B<br />C<br />D<br />E<br />F<br />G<br />H<br />I<br />J<br />K<br />L<br />M<br />N<br />O<br />P<br />Q<br />R<br />S<br />T<br />U<br />V<br />W<br />X<br />Y<br />Z<br />A</span>
        </div>
        <div class="m_about__title_word">
          <span>A<br />B<br />C<br />D<br />E<br />F<br />G<br />H<br />I<br />J<br />K<br />L<br />M<br />N<br />O<br />P<br />Q<br />R<br />S<br />T<br />U<br />V<br />W<br />X<br />Y<br />Z<br />A<br />B</span>
        </div>
        <div class="m_about__title_word">
          <span>A<br />B<br />C<br />D<br />E<br />F<br />G<br />H<br />I<br />J<br />K<br />L<br />M<br />N<br />O</span>
        </div>
        <div class="m_about__title_word">
          <span>A<br />B<br />C<br />D<br />E<br />F<br />G<br />H<br />I<br />J<br />K<br />L<br />M<br />N<br />O<br />P<br />Q<br />R<br />S<br />T<br />U</span>
        </div>
        <div class="m_about__title_word">
          <span>A<br />B<br />C<br />D<br />E<br />F<br />G<br />H<br />I<br />J<br />K<br />L<br />M<br />N<br />O<br />P<br />Q<br />R<br />S<br />T</span>
        </div>
      </div>
      <!-- VIDEO-BG -->
      <div class="video__bg">
        <video
          class="video__content"
          autoplay
          loop
          muted>
          <source
            src="~/assets/video/Render.mp4"
            type="video/mp4" />
        </video>
      </div>

      <!-- ABOUT-DESCRIPTION01 -->
      <div class="about__description description01">
        <span class="about__word">ITに&nbsp;</span>
        <span class="about__word">興味が&nbsp;</span>
        <span class="about__word">ある方</span>
        <br />
        <span class="about__word">日本&nbsp;</span>
        <span class="about__word">就職を&nbsp;</span>
        <span class="about__word">希望する</span>
        <br />
        <span class="about__word">人々の&nbsp;</span>
        <span class="about__word">集まり</span>
      </div>

      <!-- ABOUT-DESCRIPTION02 -->
      <div class="about__description description02">
        <span class="about__word02">私たちの</span>
        <br />
        <span class="about__word02">サークルを</span>
        <br />
        <span class="about__word02"><span class="word_em">紹介</span>します</span>
        <span class="about__screamer">!</span>
      </div>

      <!-- VIDEO INTRO -->
      <div class="video-poster back-to-position delay-0 to-top">
        <img
          src="~/assets/video/poster.gif"
          alt="poster" />
        <span class="material-icons play-btn cursor__hover_el"> play_circle_filled </span>
      </div>
      <div class="video-intro">
        <video
          controls
          playsinline
          muted>
          <source
            src="~/assets/video/intro_video.mp4"
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
@import url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
    .about__section {
      position: relative;
      font-family: 'Noto Sans JP', sans-serif;
      font-weight: 900;
      color: #fff;
      .container {
        .about__title {
           font-family: 'Rampart One', cursive;
          @media screen and (min-width: 416px) {
            height: auto;
          }    
          @media screen and (max-width: 415px) {
            height: 0;
            overflow: hidden;
          }
          h1 {            
            text-align: center;
            .about__title_word {
              z-index: -1;
              @media screen and (min-width: 416px) {
                font-size: 20vw;
              }    
              @media screen and (max-width: 415px) {
                font-size: 65px;    
              } 
            }               
          }
        }
        .m_about__title {
          margin: 0 auto;
          width: 300px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          overflow: hidden;
          @media screen and (min-width: 416px) {
            height: 0;
          }    
          @media screen and (max-width: 415px) {
            height: 50px;  
          } 
          .m_about__title_word {
            width: 55px;
            height: 1680px;
            text-align: center;
            font-size: 60px;
            line-height: 60px;
            vertical-align: center;
            background-color:rgba(126, 126, 126, 0.5);
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
            line-height: 1.1;
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
          line-height: 1.1;
          margin: 20rem 0;
          text-align: center;
        }
         .close-btn {
        font-size: 10vw;
      }
  } 
  @media all and (min-width: 575px) and (max-width: 768px) {
    .about__description {
      width: 100%;
      font-size: 3rem;
      text-align: center;
      margin: 15rem 0;
      line-height:1.1;
    }
  }

   @media all and (max-width: 768px) {
     .about__section {
      position: relative;
      font-family: 'Noto Sans JP', sans-serif;
      font-weight: 900;
      color: #fff;
      .container {
        .about__title {
          h1 {
            font-size: 20vw;
            text-align: center;
            .about__title_word {
              display: inline-block;
            }
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
            font-size: 3rem;
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
