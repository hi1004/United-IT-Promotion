<template>
  <footer>
    <div class="container">
      <FooterLogo />
      <div class="info">
        <span>Personal information manager : OhByeongHeon<br /></span>
        <span>E-mail : qudgjswkd202@gmail.com<br /></span>
      </div>
      <a
        class="copyright"
        href="https://github.com/hi1004/United-IT-Promotion.git"
        target="_blank">
        COPYRIGHT {{ new Date().getFullYear() }}. J-BIT UNITED IT. All rights reserved.
      </a>
    </div>
  </footer>
</template>

<script>

import FooterLogo from '~/components/FooterLogo'
export default {
  components: {
    FooterLogo
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/main';
  footer {
    padding: 30px 0;
    text-align: center;
    opacity: .8;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    .copyright{
      display: inline-block;
    }
  }
</style>