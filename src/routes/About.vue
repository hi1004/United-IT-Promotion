<template>
  <section
    id="scene"
    class="panel"
    data-parallax="scroll">
    <canvas
      id="dotImage"
      data-depth="0.6"></canvas>
    <canvas
      id="particles"
      class="bg-canvas"
      data-depth="0.9"></canvas>
  </section>

  <section class="about">
    <div class="container">
      <h1>자기소개</h1>
    </div>
  </section>
</template>

<script>
  import common from '~/config/common';
  import dotImage from '~/config/dotImage';
  import particles from '~/config/particles';
  import about from '~/config/about';
  import $ from 'jquery';
  const Parallax = require('parallax-js');
  export default {
    mounted() {
      common();
      dotImage();
      particles();
      about();
      /* PARALLAX */
      $(function () {
        new Parallax($('#scene')[0]);
      });
    },
  };
</script>
<style lang="scss" scoped>
  .panel {
    top: -70px;
    z-index: -2;
  }
  #particles {
  position: absolute;
  top: 0;
  opacity: 1;
  z-index:101
}
</style>
