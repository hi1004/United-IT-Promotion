<template>
  <!-- executives -->
  <section
    class="executives__section"
    id="executives">
    <div class="container">
      <div class="left-box">
        <div class="contents">
          <h1 class="title">
            J-BIT UNITED IT<br />
            EXECUTIVES
          </h1>
          <div class="img-wrap">
          </div>
        </div>
      </div>

      <div class="right-box">
        <div class="profile">
          <img
            class="img"
            src="~/assets/logo/group1.png"
            alt="gropu-logo" />

          <div class="photo"></div>
          <div class="name">
            장현아
          </div>
          <div class="position">
            회장
          </div>
          <p class="description">
            안녕하세요 저는 장현아라고 합니다. 잘부탁드립니다.
          </p>
        </div>
        <div class="profile">
          <img
            class="img"
            src="~/assets/logo/group2.png"
            alt="gropu-logo" />
          <div class="photo"></div>
          <div class="name">
            장현아
          </div>
          <div class="position">
            회장
          </div>
          <p class="description">
            안녕하세요 저는 장현아라고 합니다. 잘부탁드립니다.
          </p>
        </div>
        <div class="profile">
          <img
            class="img"
            src="~/assets/logo/group3.png"
            alt="gropu-logo" />
          <div class="photo"></div>
          <div class="name">
            장현아
          </div>
          <div class="position">
            회장
          </div>
          <p class="description">
            안녕하세요 저는 장현아라고 합니다. 잘부탁드립니다.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .executives__section {
    position: relative;
    margin-top: 40rem;
    color: #000;
    height: 320vh;
    .container {
      display: flex;
      height: 100%;
      .left-box {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        bottom: 10rem;
        .contents {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          .title {
            font-family: 'Black Han Sans', sans-serif;
            font-size: 5vw;
            padding: 0;
            position: absolute;
            text-align: center;
            z-index: 1;
          }
        }
      }
    }
    .right-box {
      width: 50%;
      position: absolute;
      right: 0;

      .profile {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
     /*    background-color: lightgray; */
        align-items: center;
        flex-direction: column;
        margin-bottom: 10rem;
        &:last-child {
          margin-bottom: 0;
        }
        .img {
          position: fixed;
          left: 0;
          top: 0;
          display: none;
          opacity: 0;
          transition: all 1s;
        }
        &.active {
          .img {
             display: block;
             opacity: 1;
             
          }
        }
      }
    }
  }
</style>
