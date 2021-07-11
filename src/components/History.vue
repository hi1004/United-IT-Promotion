<template>
  <div class="container">
    <h1 id="title">
      History
    </h1>
    <!-- <div class="spacer s2"></div> -->
    <div
      id="trigger1"
      class="spacer s0"></div>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-40 10 400 200">
      <path
        id="word"
        style="stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 1009.23px; stroke-dashoffset: 1009.23px;"
        fill="none"
        stroke="#171818"
        stroke-width="5"
        d="M22.328,70.018c9.867-7.4,10.724,20.434,13.014,28.694c-0.08-9.105-1.308-31.463,11.936-31.886
			c11.313-0.361,17.046,19.368,16.367,28.098c-1.432-10.289,6.234-30.682,18.163-25.671c11.505,4.833,8.682,26.772,20.071,31.964
			c13.06,5.953,14.854-8.305,19.734-17.017c7.188-12.836,4.933-15.417,29.6-14.8c-8.954-3.842-37.42,1.728-28.539,20.1
			c5.823,12.045,34.911,12.583,30.018-8.873c-5.385,17.174,24.01,23.104,24.01,9.123c0-9.867,3.816-15.937,16.034-18.5
			c8.359-1.754,18.982,4.754,25.9,9.25c-10.361-4.461-51.941-13.776-37.749,12.357c9.435,17.372,50.559,2.289,33.477-6.063
			c-2.871,19.008,32.415,31.684,30.695,54.439c-2.602,34.423-66.934,24.873-79.302,2.134c-13.11-24.101,38.981-36.781,54.798-40.941
			c8.308-2.185,42.133-12.162,25.88-25.587c-2.779,17.058,19.275,28.688,29.963,12.911c6.862-10.131,6.783-25.284,30.833-19.117
			c-9.404-0.429-32.624-0.188-32.864,18.472c-0.231,17.912,21.001,21.405,40.882,11.951" />
      <path
        id="dot"
        style="stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 44.2974px; stroke-dashoffset: 44.2974px;"
        fill="none"
        stroke="#171818"
        stroke-width="5"
        d="M247.003,38.567c-7.423,1.437-11.092,9.883-1.737,11.142c14.692,1.978,13.864-13.66,1.12-8.675" />
    </svg>
    <!-- <div class="spacer s2"></div> -->
    <div
      v-for="(slogan, i) in slogans.years"
      :class="[slogans.class.historyItem, slogan % 2 === 0 ? slogans.class.teamup : slogans.class.solo]"
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
.container {
  position: relative;
}

  #title {
    font-size: 10vh;
    text-align: center;
  }

  .history-container {
    display: flex;
    margin: 20vh auto;
    justify-content: center;
    flex-direction: column;
  }
  .history-item {
    // width: 30vw;
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
