<template>
  <div>
    <!-- 일본어융합학부 -->
    <a
      href="https://krsna.bufs.ac.kr/krsna/"
      target="_blank"><img
        src="~/assets//logo/japanese_logo.jpg"
        class="japanese-logo"
        alt="Convergenece of Japanese Studies" />
    </a>
    <!-- 부산외국어대학교 -->
    <a
      href="https://www.bufs.ac.kr/html/00_main/default.aspx"
      target="_blank"><img
        src="~/assets//logo/university_logo.jpg"
        class="bufs-logo"
        alt="Busan University of Foreign Studies" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
  div {
    display: flex;
  }
  .japanese-logo {
    height: 40px;
     margin-right: 10px;
     width: 183px;
  }

  .bufs-logo,
  .japanese-logo {
    margin-top: 30px;
    &:hover {
      opacity: 0.7;
    }
  }

  @media all and (max-width: 430px) {
    div {
      flex-direction: column;
    }
   .japanese-logo {
      margin-right: 0px;
    }
  }
</style>
