<template>
  <footer>
    <div class="container">
      <!-- J-bit United IT -->
      <img
        src="~/assets/logo/footer_logo.png"
        class="united-logo"
        alt="J-bit United IT" />
      <div class="info-wrap">
        <div class="info">
          <span>information manager : OhByeongHeon<br /></span>
          <span>E-mail : qudgjswkd202@gmail.com<br /></span>
        </div>
        <a
          class="copyright"
          href="https://github.com/hi1004/United-IT-Promotion.git"
          target="_blank">
          COPYRIGHT {{ new Date().getFullYear() }}. J-BIT UNITED IT. ALL RIGHTS RESERVED.
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    components: {},
  };
</script>

<style lang="scss" scoped>
  @import '~/scss/main';
  footer {
    text-align: center;
    opacity: 1;
    line-height: 1.8;
    font-family: 'Oswald', sans-serif;
    position: relative;
    z-index: 1;
    background-color: rgb(15, 15, 15);
    padding: 50px;
    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
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
  @media all and (max-width: 580px) {
    footer {
      text-align: center;
      opacity: 1;
      line-height: 1.8;
      font-family: 'Oswald', sans-serif;
      position: relative;
      z-index: 1;
      background-color: rgba(15, 15, 15, 0.801);
      padding: 20px;
      .container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .copyright {
          display: inline-block;
          font-size: 14px;
        }
        .united-logo {
          padding: 20px 0;
          width: 90px;
        }
      }
    }
  }
</style>
