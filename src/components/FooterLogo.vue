<template>
  <!-- 부산외국어대학교 -->
  <a
    href="https://www.bufs.ac.kr/html/00_main/default.aspx"
    target="_blank"><img
      src="~/assets/university_logo.jpg"
      class="bufs-logo"
      alt="Busan University of Foreign Studies" />
  </a>
  <!-- 일본어융합학부 -->
  <a
    href="https://krsna.bufs.ac.kr/krsna/"
    target="_blank"><img
      src="~/assets/japanese_logo.jpg"
      class="japanese-logo"
      alt="Convergenece of Japanese Studies" />
  </a>
  <!-- J-bit United IT -->
  <img
    src="~/assets/footer_logo.png"
    class="united-logo"
    alt="J-bit United IT" />
</template>

<style lang="scss" scoped>
  
  .bufs-logo {
    margin-bottom: 20px;
  }
  .bufs-logo,
  .japanese-logo {
    &:hover{
      opacity: 0.7;
    }
  }
  .united-logo {
    padding: 20px 0;
    width: 90px;
  }
</style>
