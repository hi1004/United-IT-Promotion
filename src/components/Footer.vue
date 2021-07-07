<template>
  <footer>
    <div class="container">
      <!-- J-bit United IT -->
      <img
        src="~/assets/footer_logo.png"
        class="united-logo"
        alt="J-bit United IT" />
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
      <FooterLogo />
    </div>
  </footer>
</template>

<script>
  import FooterLogo from '~/components/FooterLogo';
  export default {
    components: {
      FooterLogo,
    },
  };
</script>

<style lang="scss" scoped>
  @import '~/scss/main';
  footer {
    padding: 50px 0;
    text-align: center;
    opacity: 0.8;
    line-height: 1.8;
    font-family: 'Oswald', sans-serif;
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .copyright {
        display: inline-block;
      }
      .united-logo {
        padding: 20px 0;
        width: 90px;
      }
    }
  }
</style>
