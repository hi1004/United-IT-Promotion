<template>
  <div class="container">
    <h1 id="title">
      Activity
    </h1>
    <div class="activity-slider">
      <div class="activity-item">
        <div class="img">
          <img
            src="../assets/activity_study.png"
            alt="activity_study"
            srcset="" />
        </div>
        <div class="description">
          <h1>자바 프로그래밍 통합 스터디</h1>
          <h3>대충 이쁜 눈나들과 잘생긴 형아들이 자바 가르쳐준다는 내용</h3>
        </div>
      </div>
      <div class="activity-item">
        <div class="img">
          <img
            src="../assets/activity_tandem.png"
            alt="activity_study"
            srcset="" />
        </div>
        <div class="description">
          <h1>한-일 탄뎀 활동</h1>
          <h3>대충 일본인 친구랑 이야기하며 회화 실력 늘릴 수 있다는 내용</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import activity from '~/config/activity';
  export default {
    mounted() {
      activity();
    },
  };
</script>

<style lang="scss" scoped>
  #title {
    transform: translateY(10vh);
    text-align: center;
    font-size: 10vh;
  }
  .activity-slider {
    display: flex;
    position: relative;
    margin: 20vh auto;
    width: 60vw;
    height: 40vw;
    // background-color: gray;
    justify-content: center;
    flex-direction: column;
  }

  .activity-item {
    background-color: rgba(128, 128, 128, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
    opacity: 1;
    transition: 1s ease-in-out;
    
    .img {
      width: 50%;
      height: 50%;
      margin: 10% 0;
    }
    img {
      width: 100%;
      height: 100%;
    }

    .description {
       height: 40%;
    }
  }
</style>
