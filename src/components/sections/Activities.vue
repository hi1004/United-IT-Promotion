<template>
  <section
    id="activities"
    class="activities__section">
    <div id="activities__container">
      <div class="slide__wrap">
        <section class="slide__content first">
          <div class="banner first__banner">
            <div class="content">
              <h1 class="slide__title back-to-position to-top">
                PROGRAMMING STUDY
              </h1>
              <h2 class="slide__subtitle back-to-position to-top delay-1">
                개발자가 되기 위한 <span>자바/웹</span> 통합 스터디
              </h2>
              <p class="slide__paragraph back-to-position to-top delay-2">
                저희 동아리는 다양한 플랫폼에서 쓰이고 있는 자바 언어를 기본으로 스터디를 진행하고 있습니다. 
                개별로 진행되던 스터디를 하나로 통합하여 실력 편차를 최소한으로 하며 누구나 개발 경험을
                쌓을 수 있는 스터디로 준비했습니다. 또한 최근에는 웹 개발에 관심있는 분들이 늘어나
                프론트엔드 스터디를 기획하여, 레이아웃부터 자바스크립트 나아가 다양한 라이브러리를
                활용할 수 있도록 하고 있습니다.
              </p>
            </div>
          </div>
        </section>
        <section class="slide__content second">
          <div class="banner second__banner">
            <div class="content">
              <h1 class="slide__title back-to-position scroll-spy to-top">
                KR↔JP EXCHANGE
              </h1>
              <h2 class="slide__subtitle back-to-position scroll-spy to-top delay-1">
                일본인 친구들과 언어 교류
              </h2>
              <p class="slide__paragraph back-to-position scroll-spy to-top delay-2">
                2020년도부터 코로나 상황으로 인해 해외로 갈 수 있는 기회가 거의 없어졌습니다. 
                이로 인해 대다수의 학생들이 회화에 있어 어려움을 느낄 때가 많았습니다. 
                그래서 저희 동아리에서는 학교에 있는 일본인 유학생들을 모아 
                언어교류를 할 수 있는 교류회를 만들었습니다. 2대2로 진행되는 교류회는 한 시간은 일본어, 
                한 시간은 한국어로 하며 토론형식으로 진행돼 언어 뿐만아니라 논리적인 사고 또한 기를 수 있도록
                노력하고 있습니다. 
                저희 동아리에서는 부원들을 위해 어디서든 성장할 수 있는 환경을 제공해 드리겠습니다.
              </p>
            </div>
          </div>
        </section>
        <section class="slide__content third">
          <div class="banner third__banner">
            <div class="content">
              <h1 class="slide__title back-to-position to-top">
                JOB STUDY
              </h1>
              <h2 class="slide__subtitle back-to-position to-top delay-1">
                일본 취업을 위한 다양한 활동들
              </h2>
              <p class="slide__paragraph back-to-position to-top delay-2">
                일본 취업을 희망하는 친구들을 모아 일본 취업에 필요한 정보들을 공유하며 더 나아가 이력서 첨삭,
                모의 면접까지 진행하고 있습니다. 
                그리고 매주마다 진행되는 기업 분석 발표를 통해 말하기 연습과 기업과 업계에 대한 이해도도 깊게
                하고 있습니다.
                하지만 최근 코로나로 인해 취업 활동이 힘들어진 상황이 되었지만, 
                이 시기를 발판으로 스스로 더 성장할 수 있는 기회로 만들겠습니다.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div class="slide__space">
        <h1 id="slide__index_title">
          Activities
        </h1>

        <div class="slide__index_text">
          HOW ARE MAKERS<br />
          EXPERIENCING THE<br />
          EFFECTS OF THE<br />
          GLOBAL PANDEMIC?<br />
        </div>
        <div class="slide__index_images">
          <img
            class="slide__index_img"
            src="~/assets/activity/roket01.png"
            alt="" />
        </div>
      </div>
      <div
        id="first_space"
        class="slide__space"></div>
      <div
        id="second_space"
        class="slide__space"></div>
      <div
        id="third_space"
        class="slide__space"></div>
    </div>
  </section>
</template>

<script>
  export default {
    mounted() {},
  };
</script>

<style lang="scss" scoped>
  .activities__section {
    position: relative;
 
    &::before {
      position: absolute;
      left: 0;
      content: '';
      width: 100%;
      height: 500px;
      top: -4.4%;
      // background-color: #fdc000;
      transform: skewY(170deg);
    }
  }
  #activities__container {
    position: relative;
    overflow: hidden;
    .slide__wrap {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 100;
      .slide__content {
        position: absolute;
        top: 0;
        left: 100%;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        z-index: 100;
        .banner {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 0 100px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          &.first__banner {
            background: url('~/assets/activity/activity_study.jpg');
            background-position: center;
            background-size: cover;
            .slide__title {
              color: lightgoldenrodyellow;
            }
          }
          &.second__banner {
            background: url('~/assets/activity/activity_study.jpg');
            background-position: center;
            background-size: cover;
            .slide__title {
              color: pink;
            }
          }
          &.third__banner {
            background: url('~/assets/activity/activity_study.jpg');
            background-position: center;
            background-size: cover;
            .slide__title {
              color: aqua;
            }
          }
          .content {
            max-width: 550px;
            color: #fff;
            .slide__title {
              font-weight: 400;
              font-size: 5rem;
              letter-spacing: 0.1rem;
              font-family: 'Black Han Sans', sans-serif;
            }
            .slide__subtitle {
              font-size: 2.2rem;
              font-family: 'Black Han Sans', sans-serif;
              span {
                color: #fdc000;
              }
              p {
                font-size: 1.2rem;
                font-weight: 300;
                letter-spacing: 0.02rem;
                margin: 15px 0 35px;
              }
            }
            .slide__paragraph {
              font-family: 'Noto Sans KR', sans-serif;
            }
          }
        }
    
        @media all and (max-width: 991px) {
          .banner {
            padding: 100px 50px;
            .content {
              .slide__title {
                font-size: 2rem;
                letter-spacing: 0.05rem;
              }
              p {
                font-size: 1rem;
              }
            }
          }
        }
        &.index {
          background-color: transparent;
        }
        &.first {
          background-color: lightyellow;
        }
        &.second {
          background-color: lightpink;
        }
        &.third {
          background-color: lightcoral;
        }
      }
    }
    .slide__space {
      position: relative;
      width: 100%;
      height: 100vh;
      #slide__index_title {
        position: absolute;
        left: 7vw;
        top: 5vh;
        font-family: 'Black Han Sans', sans-serif;
        font-size: 12vw;
        color: #fff;
      }
      .slide__index_text {
        position: absolute;
        font-size: 3vw;
        color: #fff;
        font-family: 'Black Han Sans', sans-serif;
        right: 0;
        top: 50vh;
        width: 500px;
        // transform: translate(-50%, -50%);
      }
      .slide__index_images {
        img {
          position: absolute;
          width: 50px;
          bottom: 0;
          left: 0;
        }
      }
      .slide__index_description {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 15vw;
        color: #000;
      }
    }
  }
</style>
