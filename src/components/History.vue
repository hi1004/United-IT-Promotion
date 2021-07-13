<template>
  <div class="container"> 
    <svg      
      id="title-history"
      style="width:40vw;height:10vw;"
      preserveAspectRatio="none">
      <text        
        x="0"
        y="100%">H</text>
      <text
        x="14%"
        y="100%">I</text>
      <text
        x="26.5%"
        y="100%">S</text>
      <text
        x="40%"
        y="100%">T</text>
      <text
        x="54%"
        y="100%">O</text>
      <text
        x="68%"
        y="100%">R</text>
      <text
        x="82%"
        y="100%">Y</text></svg>
    <div class="history-container">
      <div
        v-for="(year, i) in slogans.years"
        :class="[
          slogans.class.historyItem
        ]"
        :key="year">
        <h1 class="year">
          {{ year }}
        </h1>
        <h1 class="slogan">
          {{ slogans.texts[i] }}  
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
  import history from '~/config/history';
  export default {
    data() {
      return {
        slogans: {
          texts: [
            '시작의 날개를 펴다',
            '꿈은 이루어진다',
            '더 높이 \n더 단단하게',
            '새로운 시작',
            '한계를 넘어서',
            '원년의 에너지로',
            '꿈을 향한 스파르타!',
            '더 넥스트 스파르탄!',
            '나의 세상을 꿈꾸자!',
            '창공을 누비다!',
          ],
          years: (() => {
            const years = [];
            const thisYear = new Date().getFullYear();
            for (let i = 2012; i <= thisYear; i += 1) {
              years.push(i);
            }
            return years;
          })(),

          class: {
            historyItem: 'history-item',
            year: 'year',
            slogan: 'slogan'
          },
        },
      };
    },
    mounted() {
      history();
    },
  };
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@900&display=swap'); 
  .container {
    position: relative;
  }

  #title-history{
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
  #title-history text:nth-child(1) { animation-delay: 0s; }
  #title-history text:nth-child(2) { animation-delay: 0.1s; }
  #title-history text:nth-child(3) { animation-delay: 0.2s; }
  #title-history text:nth-child(4) { animation-delay: 0.3s; }
  #title-history text:nth-child(5) { animation-delay: 0.4s; }
  #title-history text:nth-child(6) { animation-delay: 0.5s; }
  #title-history text:nth-child(7) { animation-delay: 0.6s;}

  

  .history-container {
    display: flex;    
    justify-content: center;
    flex-direction: column;
  }
  .history-item {
    margin: 20vh 0;
    
    .year {      
      opacity: 0;      
      transform: translateX(-10vw);
      transition: 1s ease-out;
      font-family: 'Source Code Pro', monospace;
      font-size: 8vw;
      text-align: left;
    }

    .slogan {
      right: 10vw;
      top: 40vh;
      position: fixed;
      font-size: 5vw; 
      font-family: 'Source Code Pro', monospace;
      z-index: 0;
      opacity: 0;
    }

    &.year-effect {
      .year{
        opacity: 0.5;
        transition: 0.5s ease-in;
        transform: translateX(0vw);
      }
      
    }
    &.year-focus {
      .year{
        opacity: 1;
        color: #fdc000;
        transition: 0.5s ease-in;
        transform: translateX(15vw) scale(1.3);
      }           
      .slogan {  
        transition: 1s ease-out;
        z-index: 1;
        opacity: 1;        
      }
    }
  }
</style>
