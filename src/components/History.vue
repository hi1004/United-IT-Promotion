<template>
  <h1 class="header-section">
    Scroll to see a timeline animation
  </h1>

  <svg
    id="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 1200">
    <path
      class="line01 line"
      d="M 10 200  600 200" />
    <path
      class="line02 line"
      d="M 10 400  600 400" />
    <path
      class="line03 line"
      d="M 10 600  600 600" />
    <path
      class="line04 line"
      d="M 10 800  600 800" />
    <path
      class="line05 line"
      d="M 10 1000  600 1000" />
    <text
      class="text01"
      x="30"
      y="190">2018</text>
    <text
      class="text02"
      x="30"
      y="390">2019</text>
   

    <path
      class="theLine" 
      d="M -5,0
           Q 450 230 300 450 
           T 130 750
           Q 100 850 300 1000
           T 150 1200"
      fill="none"
      stroke="white"
      stroke-width="10px" />
  
    <circle
      class="ball ball01"
      r="20"
      cx="25"
      cy="25" />
    <circle
      class="ball ball02"
      r="20"
      cx="298"
      cy="221" />
    <circle
      class="ball ball03"
      r="20"
      cx="347"
      cy="419" />
    <circle
      class="ball ball04"
      r="20"
      cx="223"
      cy="621" />

  </svg>
</template>

<script>
import history from '~/config/history'
export default {
  mounted() {
    history();
  }
}
</script>


<style lang="scss" scoped>
body {
	height: 400vh;
  background: black;
  color: white;
}

.header-section {
  margin: 100px auto 0;
}

svg {
  overflow: visible;
  transform: scale(0.8);
}

.ball {
  fill: white;
  visibility: hidden;
}

.line {
  fill: none;
  stroke: white;
  stroke-width: 2px;
}
text {
  fill: white;
  font-size: 15px;
  font-family: "Signika Negative", sans-serif; 
  visibility: hidden;
}

</style>