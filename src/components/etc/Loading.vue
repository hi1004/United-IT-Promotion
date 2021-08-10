<template>
  <div id="load">
    <h2>
      <span>L</span>
      <span>o</span>
      <span>a</span>
      <span>d</span>
      <span>i</span>
      <span>n</span>
      <span>g</span>
      <span>...<span> </span></span>
    </h2>
  </div>
</template>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    font-family: consolas;
  }
  #load {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #171818;
    h2 {
      color: #171818;
      font-size: 6rem;  
      display: flex;
      span {
        animation: animate 4s linear infinite;
        &:nth-child(1) {
          animation-delay: 0s;
        }
        &:nth-child(2) {
          animation-delay: 0.1s;
        }
        &:nth-child(3) {
          animation-delay: 0.2s;
        }
        &:nth-child(4) {
          animation-delay: 0.3s;
        }
        &:nth-child(5) {
          animation-delay: 0.4s;
        }
        &:nth-child(6) {
          animation-delay: 0.5s;
        }
        &:nth-child(7) {
          animation-delay: 0.6s;
        }
        &:nth-child(8) {
          animation-delay: 0.7s;
        }
      }
    }
  }
  @keyframes animate {
    0% {
      color: #fff;
      filter: blur(2px);
      text-shadow: 0 0 10px #fdc000, 0 0 20px #fdc000, 0 0 40px #fdc000, 0 0 80px #fdc000,
        0 0 120px #fdc000, 0 0 200px #fdc000, 0 0 300px #fdc000, 0 0 400px #fdc000;
    }

    25%, 75% {
      color: #171818;
      filter: blur(0);
      text-shadow: none;
    }
  }
</style>
