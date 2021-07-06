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
        COPYRIGHT {{ new Date().getFullYear() }}. J-BIT UNITED IT. ALL RIGHTS RESERVED.
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
    padding: 50px 0;
    text-align: center;
    opacity: .8;
    line-height: 1.8;
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .copyright{
        display: inline-block;
      }
    }
  }
</style>