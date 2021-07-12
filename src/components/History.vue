<template>
  <div class="container"> 
    <svg      
      id="title-history"
      style="width:60vw;height:30vw;"
      preserveAspectRatio="none">
      <text        
        x="0"
        y="50%">H</text>
      <text
        x="14%"
        y="50%">I</text>
      <text
        x="26%"
        y="50%">S</text>
      <text
        x="40%"
        y="50%">T</text>
      <text
        x="53%"
        y="50%">O</text>
      <text
        x="68%"
        y="50%">R</text>
      <text
        x="82%"
        y="50%">Y</text></svg>

    <div
      v-for="(slogan, i) in slogans.years"
      :class="[
        slogans.class.historyItem,
        slogan % 2 === 0 ? slogans.class.teamup : slogans.class.solo,
      ]"
      :key="slogan">
      <h1 class="year">
        {{ slogan }}
      </h1>
      <h5 class="description">
        {{ slogans.texts[i] }}
      </h5>
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
            '더 높이 더 단단하게',
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
            teamup: 'teamup',
            solo: 'solo',
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
  @import url('https://fonts.googleapis.com/css2?family=Tourney:wght@500&display=swap');  
  .container {
    position: relative;
  }

  #title-history{
    display: block;
    margin: auto;
      text{
        opacity: 0;
      }
      text.title-effect{
        opacity: 1;
        font-family: 'Tourney', cursive;
        font-size: 15vw; fill:transparent;
        stroke-dasharray: 150px;
        animation: stroke 1s linear;
        animation-fill-mode: forwards;
      }
  }
  #title-history text:nth-child(1) { animation-delay: 0s; }
  #title-history text:nth-child(2) { animation-delay: 0.1s; }
  #title-history text:nth-child(3) { animation-delay: 0.2s; }
  #title-history text:nth-child(4) { animation-delay: 0.3s; }
  #title-history text:nth-child(5) { animation-delay: 0.4s; }
  #title-history text:nth-child(6) { animation-delay: 0.5s; }
  #title-history text:nth-child(7) { animation-delay: 0.6s;}

  @keyframes stroke {
    0% { stroke:#FFFFFF; stroke-width: 3px; stroke-dashoffset: 326px; }
    70% { fill: transparent; }
    98% { stroke:#FFFFFF; stroke-width: 3px; }
    100% { fill: #FFFFFF; stroke-dashoffset: 0px; }
  }

  .history-container {
    display: flex;
    margin: 20vh auto;
    justify-content: center;
    flex-direction: column;
  }
  .history-item {
    opacity: 0;
    transition: 1s ease-out;
    margin: 15vw auto;

    &.solo {
      text-align: right;
    }

    &.teamup {
      text-align: left;
    }

    &.active {
      opacity: 1;
      transition: 0.8s ease-in;

      &.solo {
        transform: translateX(-20vw);
      }

      &.teamup {
        transform: translateX(20vw);
      }
    }
  }
</style>
