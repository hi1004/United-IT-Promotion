<template>
  <div class="container">
    <svg      
      id="title-activity"
      style="width:50vw;height:10vw;"
      preserveAspectRatio="none">
      <text        
        x="0"
        y="100%">A</text>
      <text
        x="12.5%"
        y="100%">C</text>
      <text
        x="25%"
        y="100%">T</text>
      <text
        x="37%"
        y="100%">I</text>
      <text
        x="49%"
        y="100%">V</text>
      <text
        x="61.5%"
        y="100%">I</text>
      <text
        x="74%"
        y="100%">T</text>
      <text
        x="86.5%"
        y="100%">Y</text></svg>
    <div class="activity-slider">
      <div class="activity-item">
        <div class="img">
          <img
            src="../assets/activity_study.png"
            alt="activity_study"
            srcset="" />
        </div>
        <div class="description">
          <h1>자바 프로그래밍<br />통합 스터디</h1>
          <br />
          <h3>대충 이쁜 눈나들과 잘생긴 형아들이<br />자바 가르쳐준다는 내용</h3>
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
          <br />
          <h3>대충 일본인 친구와 이야기하며<br />일본어 회화 실력을 늘릴 수 있다는 내용</h3>
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
  .container{
    margin: 20vh auto;
  }
  // #title {
  //   transform: translateY(10vh);
  //   text-align: center;
  //   font-size: 10vh;
  //   margin-bottom: 10vh;
  // }

  #title-activity{
    display: block;
    margin: 30vh auto;
      text{
        opacity: 0;
      }
      text.title-effect{
        opacity: 1;
        font-family: 'Source Code Pro', monospace;
        font-size: 10vw; fill:transparent;
        stroke-dasharray: 150px;
        animation: stroke1 1s linear;
        animation-fill-mode: forwards;
      }
  }
  @keyframes stroke1 {
    0% { stroke:#FFFFFF; stroke-width: 3px; stroke-dashoffset: 326px; }
    70% { fill: transparent; }
    98% { stroke:#FFFFFF; stroke-width: 3px; }
    100% { fill: #FFFFFF; stroke-dashoffset: 0px; }
  }
  #title-activity text:nth-child(1) { animation-delay: 0s; }
  #title-activity text:nth-child(2) { animation-delay: 0.1s; }
  #title-activity text:nth-child(3) { animation-delay: 0.2s; }
  #title-activity text:nth-child(4) { animation-delay: 0.3s; }
  #title-activity text:nth-child(5) { animation-delay: 0.4s; }
  #title-activity text:nth-child(6) { animation-delay: 0.5s; }
  #title-activity text:nth-child(7) { animation-delay: 0.6s;}
  #title-activity text:nth-child(8) { animation-delay: 0.7s;}

  .activity-slider {
    margin: 20vh auto;
    width: 60vw;
    height: auto;
    // background-color: lightgray;
    justify-content: center;
    flex-direction: column;
  }

  .activity-item {
    background-color: rgba(64, 64, 64, .1); 
    display: block;
    margin: 0 auto;
    margin-bottom: 10vh;
    width: 60vw;
    height: 100vh;
    text-align: center;    
   
  .img {      
    width: 30vw;
    height: 30vw;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    transition: .5s ease-out;
    left: 15%;
    opacity: 0;
  }
  img {
    width: 100%;
    height: 100%;
  }

  .description {
    width: 60vw; 
    height: auto;
    position: fixed;
    top: 50%;
    transition: .5s ease-out;
    transform: translateY(-50%);
    right: 0;
    opacity: 0;
    h1{
      font-size: 4vw;
    }
    h3{
      font-size: 2vw;
    }
  }    
  &.slide-effect{
    .img{
      transition: .5s;
      transition-timing-function: cubic-bezier(0.155, -0.045, 0.395, 2.000);
      opacity: 1;
      z-index: 1;     
      transform: translateY(-50%) scale(1.2);
    }
    .description{
      transition: .5s; 
      transition-delay: .5s;       
      opacity: 1;
      z-index: 1;
      transform: translateY(-50%);
      h1{
        transition-delay: .5s;
      }
      h3{
        transition-delay: 1s;
      }
    }
  }   
  @media screen and (max-width: 768px){
    .img {      
      width: 50vw;
      height: 50vw;
      top: 20%;
      left: 50%;
      transform: translateX(-50%) 
    }
    .description {
      width: 80vw; 
      height: 30vh;
      right: 50%;
      top: 60%;
      transform: translateX(50%);
      h1{
        font-size: 6vw;
      }
      h3{
        font-size: 4vw;
      }
    }
    &.slide-effect{
      .img{
        transform: translateX(-50%) scale(1.2);
      }
      .description{
        transform: translateX(50%);
      }
    }
  }    
  }
</style>
