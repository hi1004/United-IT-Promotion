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
        <div class="introduce about__Chairman">
          <h1>회장</h1>
          <div class="photo">
            <img
              src="~/assets/contact/img1.png"
              alt="" />
          </div>
          <div class="name">
            장현아
          </div>
          <div>Jang Hyun-ah</div>
          <div>jha_0610@naver.com</div>
          <div>+82-10-4798-2510</div>
        </div>

        <div class="introduce about__vice-chairman">
          <h1>부회장</h1>
          <div class="photo">
            <img
              src="~/assets/contact/img2.png"
              alt="" />
          </div>
          <div class="name">
            오병헌
          </div>
          <div>Oh Byeong-heon</div>
          <div>qudgjswkd202@gmail.com</div>
          <div>+82-10-5528-4608</div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="contact">
      <div class="container">
        <a
          id="channel-chat-button"
          href="javascript:void(0)"
          class="btn btn-primary"
          onclick="void chatChannel();">
          <h5>kakao talk</h5>
        </a>
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
    .introduce {
      margin: 50px 0;
      &:last-child {
        margin-top: 300px;
      }
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
      height: 50vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #channel-chat-button {
      margin: 0 auto;
    }
  }
</style>
