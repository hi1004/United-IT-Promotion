<template>
  <div class="content-container">
    <div
      v-for="number in 3"
      :key="number"
      class="keyword">
      <h1 class="keyword-word">
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
	.content-container{
		width: 100vw;
		height: 100vh;
		position: relative;
		.keyword{
			position: absolute;
			width: 20vw;
			height: 10vw;
			opacity: 0;
			&.keyword-word{
				text-align: center;
			}
			&.focused-keyword{
				transform: scale(1.1);
			}
		}
	}
</style>
