<template>
  <section
    id="intro"
    class="intro-section">
    <div class="intro-stage">
      <div id="scene">
        <div
          class="text-wrap"
          data-depth="0.5">
          <div class="ab main">
            <img
              src="~/assets/Intro/m_J.png"
              alt="m_J" />
          </div>
          <div class="ab main">
            <img
              src="~/assets/Intro/m_hyphen.png"
              alt="m_hyphen" />
          </div>
          <div class="ab main">
            <img
              src="~/assets/Intro/m_B.png"
              alt="m_B" />
          </div>
          <div class="ab main">
            <img
              src="~/assets/Intro/m_I.png"
              alt="m_I" />
          </div>
          <div class="ab main">
            <img
              src="~/assets/Intro/m_T.png"
              alt="m_T" />
          </div>
          <div class="ab sub">
            <img
              src="~/assets/Intro/s_U.png"
              alt="s_U" />
          </div>
          <div
            class="ab sub"
            data-depth="0.5">
            <img
              src="~/assets/Intro/s_N.png"
              alt="s_N" />
          </div>
          <div
            class="ab sub"
            data-depth="0.5">
            <img
              src="~/assets/Intro/s_I.png"
              alt="s_I" />
          </div>
          <div class="ab sub">
            <img
              src="~/assets/Intro/s_T.png"
              alt="s_T" />
          </div>
          <div class="ab sub">
            <img
              src="~/assets/Intro/s_E.png"
              alt="s_E" />
          </div>
          <div class="ab sub">
            <img
              src="~/assets/Intro/s_D.png"
              alt="s_D" />
          </div>
          <div class="ab sub">
            <img
              src="~/assets/Intro/s_I.png"
              alt="s_I" />
          </div>
          <div class="ab sub">
            <img
              src="~/assets/Intro/s_T.png"
              alt="s_T" />
          </div>
        </div>

        <div
          class="layer zIndexUnder"
          data-depth="-0.5">
          <img
            src="~/assets/Intro/layer1.png"
            alt="layer1" />
        </div>
        <div
          class="layer zIndexUnder"
          data-depth="0.75">
          <img
            src="~/assets/Intro/layer2.png"
            alt="layer2" />
        </div>
        <div
          class="layer zIndexUnder"
          data-depth="1">
          <img
            src="~/assets/Intro/layer3.png"
            alt="layer3" />
        </div>
        <div
          class="layer"
          data-depth="-0.25">
          <img
            src="~/assets/Intro/layer4.png"
            alt="layer4" />
        </div>
        <div
          class="layer"
          data-depth="0.625">
          <img
            src="~/assets/Intro/layer5.png"
            alt="layer5" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import intro from '~/config/sections/intro';
  import { gsap } from 'gsap';

  const Parallax = require('parallax-js');
  export default {
    mounted() {
      intro();
      const sceneEl = document.querySelector('#scene');

      if(window.innerWidth > 769) {
         new Parallax(sceneEl);
        } 
      window.addEventListener('resize',()=>{
         if(window.innerWidth > 769) {
         new Parallax(sceneEl);
        } 
      })
       
 

      /* LOGO MOVE */
      function logoMove() {
        const ScrollMagic = window.ScrollMagic;
        const controller = new ScrollMagic.Controller();
        const aboutSection = document.querySelector('#about');
        const tween1 = gsap.to('#scene', 1, {
          opacity: 0,
        });
        new ScrollMagic.Scene({
          triggerElement: aboutSection,
          triggerHook: 0.7,
          duration: '50%',
        })
          .setPin('#scene', { pushFollowers: false })
          .setTween(tween1)
          //    .addIndicators({
          //   name: 'logo-move',
          //   colorStart: 'red',
          //   colorTrigger: 'red',
          //   colorEnd: 'red',
          // })
          .addTo(controller);
      }
      logoMove();
    },
  };
</script>

<style lang="scss" scoped>

  #scene {
    overflow: hidden;
    z-index: -2;
    height: 100vh;
    .text-wrap {
      position: relative;
      display: flex;
      top: 0;
      left: 0;
    }
  }
  .layer {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .intro-stage {
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: -1;
    overflow: hidden;
  }
  .ab {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    &.main {
      width: 15vw;
      height: 15vw;
    }
    &.sub {
      width: 5vw;
      height: 5vw;
    }
    img {
      display: block;
      margin: 0 auto;
      height: 100%;
    }
  }
  .zIndexUnder {
    z-index: -2;
  }
  @media all and (max-width: 1000px) {
    .layer {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    img {
      display: none;
    }
  }
  }

</style>
