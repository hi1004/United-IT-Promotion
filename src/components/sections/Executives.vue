<template>
  <div
    id="pin1"
    class="blue">
  </div>


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
            <div class="img-box">
              <img
                class="img"
                src="~/assets/logo/group1.png"
                alt="gropu-logo" />
            </div>
            <div class="img-box">
              <img
                class="img"
                src="~/assets/logo/group2.png"
                alt="gropu-logo" />
            </div>
            <div class="img-box">
              <img
                class="img"
                src="~/assets/logo/group4.png"
                alt="gropu-logo" />
            </div>
            <div class="img-box">
              <img
                class="img"
                src="~/assets/logo/group5.png"
                alt="gropu-logo" />
            </div>
            <div class="img-box">
              <img
                class="img"
                src="~/assets/logo/group6.png"
                alt="gropu-logo" />
            </div>
          </div>
        </div>
      </div>

      <div class="right-box">
        <div class="profile">
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
#pin1 {
  width: 100%;
  height: 5px;
  background-color: blue;
}
  .executives__section {
    position: relative;
    margin-top: 40rem;
    color: #000;
    // height: 380vh;
    .container {
      display: flex;
      height: 100%;
      .left-box {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
        .contents {
          position: relative;
          width: 100%;
       
          display: flex;
          justify-content: center;
   
          .title {
            font-family: 'Black Han Sans', sans-serif;
            font-size: 6vw;
            padding: 0;
            // position: absolute;
            text-align: center;
            z-index: 1;
            transition: all .3s;
          }
          .img-wrap {
            width: 100%;
            position: absolute;
            top: 3rem;
            
            .img {
              width: 100%;
              position: absolute;
              opacity: 0;
              top: -16rem;
              transform: scale(0.6) translateY(50px);
              transition: all .2s;
            }
          }
        }
      }
    }
    .right-box {
      width: 50%;
      position: relative;
      height: 100%;
      .profile {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;

        align-items: center;
        flex-direction: column;
        margin-bottom: 10rem;
        &:last-child {
          margin-bottom: 0;
        }
        .img {
          position: absolute;
          width: 100%;
          left: -100%;
          top: 0;
          display: none;
          opacity: 0;
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
