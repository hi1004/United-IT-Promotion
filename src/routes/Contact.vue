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

    <section class="contact">
      <div class="container">
        <!-- CONTACT -->
        <a
          id="kakao-add-channel-button"
          class="btn btn-primary"
          href="javascript:void(0)"
          onclick="void addChannel();">
          <h5 class="sns__name">Kakao plus friend</h5>
        </a>
        <a
          id="channel-chat-button"
          href="#"
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
  .contact {
    margin-top: 70px;
   
 
    .container {
       height: 10vw;
          display:flex;
    justify-content: center;
       align-items: center;
    }

    #kakao-add-channel-button {
    margin: 0 auto;
  }
  }
  #particles {
    position: absolute;
    top: 0;
    opacity: 1;
    z-index: 99;
    width: 100%;
    overflow: hidden;
  }
  
</style>
