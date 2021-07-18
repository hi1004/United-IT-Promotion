<template>
  <div class="contact-container">
    <section
      id="scene"
      class="panel"
      data-parallax="scroll">
      <canvas
        id="particles"
        class="bg-canvas"
        data-depth="0.9"></canvas>
      <canvas
        id="dotImage"
        data-depth="0.6"></canvas>
    </section>
    <!-- ABOUT -->
    <section class="about">
      <div class="container">
        <div class="about-box scroll-spy back-to-position to-top delay-0">
          <div class="introduce about__Chairman">
            <h1 class="back-to-position to-top delay-1">
              회장
            </h1>
            <div class="photo back-to-position to-top delay-2">
              <img
                src="~/assets/contact/img1.png"
                alt="" />
            </div>
            <div class="name back-to-position to-top delay-2">
              장현아
            </div>
            <div class="back-to-position to-top delay-3">
              Jang Hyun-ah
            </div>
            <div class="back-to-position to-top delay-3">
              jha_0610@naver.com
            </div>
            <div class="back-to-position to-top delay-3">
              +82-10-4798-2510
            </div>
          </div>
        </div>

        <div class="about-box scroll-spy back-to-position to-top delay-0">
          <div class="introduce about__vice-chairman">
            <h1 class="back-to-position to-top delay-1">
              부회장
            </h1>
            <div class="photo back-to-position to-top delay-2">
              <img
                src="~/assets/contact/img2.png"
                alt="" />
            </div>
            <div class="name back-to-position to-top delay-2">
              오병헌
            </div>
            <div class="back-to-position to-top delay-3">
              Oh Byeong-heon
            </div>
            <div class="back-to-position to-top delay-3">
              qudgjswkd202@gmail.com
            </div>
            <div class="back-to-position to-top delay-3">
              +82-10-5528-4608
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="contact">
      <div class="container">
        <h1 class="contact__title">
          궁금한 것이 있거나 <br />
          문의 사항이 있으신가요?
        </h1>
        <div class="contact__box">
          <a
            id="channel-chat-button"
            href="javascript:void(0)"
            class="kakao-plus btn btn-light"
            onclick="void chatChannel();">
            <div class="svg-wrap">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.429 1.424c-4.433 0-8.027 3.324-8.027 7.424 0 3.028 1.27 4.473 3.006 5.793l.009.004v3.553c0 .167.192.263.325.163L8.786 16.1l.067.027c.51.094 1.037.145 1.578.145 4.432 0 8.026-3.324 8.026-7.424-.002-4.1-3.594-7.424-8.028-7.424z"
                  fill="#FD0" />
                <path
                  d="M10.427 1C5.773 1 2 4.49 2 8.795c0 3.18 1.33 4.698 3.156 6.082l.01.004v3.732c0 .176.201.277.34.171l3.196-2.373.07.03c.535.099 1.09.151 1.655.151 4.655 0 8.427-3.49 8.427-7.795C18.854 4.491 15.082 1 10.427 1zm-2.824 9.77c.827 0 1.532-.495 1.745-1.258h1.221c-.298 1.47-1.443 2.433-2.966 2.433-1.77 0-3.175-1.322-3.175-3.16 0-1.839 1.404-3.158 3.175-3.158 1.54 0 2.691.983 2.975 2.478H9.36c-.186-.813-.916-1.319-1.757-1.319-1.191 0-1.984.85-1.984 2 0 1.152.9 1.984 1.984 1.984zm8.051 1.056h-1.12V9.299c0-.582-.339-.893-.859-.893-.582 0-.955.355-.955 1.076v2.344H11.6v-6.18h1.12V7.97c.268-.407.703-.607 1.294-.607.477 0 .868.156 1.173.477.314.32.47.756.47 1.32v2.665h-.003z"
                  fill="#000100" />
              </svg>
              <h5>Kakao plus friend</h5>
            </div>
            <h6>J-Bit</h6>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import common from '~/config/common';
  import dotImage from '~/config/background/dotImage';
  import particles from '~/config/background/particles';
  import about from '~/config/routes/about';
  import $ from 'jquery';
  const Parallax = require('parallax-js');
  export default {
    mounted() {
      common();
      dotImage();
      particles();
      about();
      // /* PARALLAX */
      $(function () {
        new Parallax($('#scene')[0]);
      });

      /* RELOAD */
      const bodyEl = document.querySelector('.contact-container');
      bodyEl.width = window.innerWidth;
      window.addEventListener('resize', () => {
        bodyEl.width = window.innerWidth;
        if (bodyEl.width >= 1021) {
          window.location.reload();
        }
      });
    },
  };
</script>
<style lang="scss" scoped>
  @import '~/scss/main';
  #particles {
    position: absolute;
    top: 0;
    opacity: 1;
    z-index: 99;
    width: 100%;
    overflow: hidden;
  }
  #dotImage {
    z-index: -1;
  }
  .about {
    text-align: center;
    margin-top: 150px;
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      .about-box {
        background: #2b2a2a;
        border-radius: 3.2rem;
        padding: 2rem;
        min-width: 35vw;
        margin: 1rem;
        position: relative;
        top: -100px;
        .introduce {
          h1 {
            font-size: 80px;
          }
          .photo {
            width: 250px;
            height: 250px;
            margin: 40px auto 20px;
            padding: 30px;
            border: 10px solid $gray-300;
            border-radius: 50%;
            box-sizing: border-box;
            background-color: $gray-200;
            overflow: hidden;
            position: relative;
            img {
              width: 100%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) scale(0.8);
            }
          }
        }
      }
      .name {
        font-size: 40px;
        font-family: 'Oswald', sans-serif;
        margin-bottom: 20px;
      }
    }
  }
  .contact {
    margin-top: 70px;
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .contact__title {
        font-size: 3.6rem;
        font-weight: 700;
        line-height: 1.4;
      }
      .contact__box {
        background: #2b2a2a;
        border-radius: 4.2rem;
        padding: 2rem;
        min-width: 35vw;
        display: flex;
        justify-content: center;
        .kakao-plus {
          display: flex;
          height: 45px;
          justify-content: space-between;
          align-items: center;
          width: 20rem;
          z-index: 1;
          padding: 0 1rem;
          .svg-wrap {
            display: flex;
            h5 {
              margin: 0;
              font-size: 0.9rem;
              font-weight: 700;
              margin-left: 0.7rem;
            }
          }

          h6 {
            margin: 0;
            font-size: 0.9rem;
          }
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
</style>
