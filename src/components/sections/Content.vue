<template>
  <div class="content-container">
    <div class="keyword-container">
      <div
        v-for="number in 5"
        :key="number"
        class="keyword">
        <h1 class="keyword-word">
          keyword{{ number }}
        </h1>
      </div>
    </div>    
    <div
      v-for="number in 5"
      :key="number"
      class="content-box">
      <h1 class="content-Title">
        keyword{{ number }}
      </h1>
    </div>
  </div>
</template>

<script>
import content from '~/config/sections/content';

export default {
	mounted(){
		content()
	}
}
</script>

<style lang="scss" scoped>
	.keyword-container{
		width: 100vw;
		height: 100vh;
		position: relative;
		.keyword{
			position: absolute;
			width: auto;
			height: auto;
			opacity: 0;
			&:hover{
				cursor: pointer;
			}
			.keyword-word{
				user-select: none;
				font-family: 'Oswald', sans-serif;
				font-weight: bolder;
				font-size: 1vw;
				text-align: center;
			}
		}
	}
	.content-box{
		width: 100vw;
		height: 80vh;
		margin: 10vh auto;
		background: rgba(64, 64, 64, 0.1);
	}
</style>
