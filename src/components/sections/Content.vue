<template>
  <section class="content__container">
    <div class="content__section">
      <h1 class="content__title">
        About
      </h1>
      <h2 class="about__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <h2 class="about__description">
        At error modi deleniti tempore maiores quibusdam! 
      </h2>
      <h2 class="about__description">
        Ea magni cum velit quasi nisi fugiat eligendi odit ad! Suscipit accusantium eos nisi repellat?
      </h2>
    </div>
    <div class="content__section">      
      <h1 class="content__title">
        Activity
      </h1>
      <div class="activity__item_container">
        <div class="activity__item"></div>
        <div class="activity__item"></div>
        <div class="activity__item"></div>
        <div class="activity__item"></div>
      </div>
    </div>    
    <div class="content__section"></div>
  </section>
</template>

<script>
import content from '~/config/sections/content';
  export default {
    mounted() {
      content();
    },
  };
</script>

<style lang="scss" scoped>

.content__container{
  opacity: 0.5;
  .content__section{
    width: 100vw;
    height: 100vh; 
    background-color: rgba(64, 64, 64, 0.1);    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .content__title{
      margin: 0;
      color: white;
      font-size: 8vw;
      font-family: 'Black Han Sans', sans-serif;
      @media all and (min-width: 1200px) {
        font-size: 96px;
      }
    }
    .about__description{
      margin: 5vh auto;
      text-align: center;
      font-size: 6vw;
      @media all and (min-width: 1200px) {
        font-size: 72px;
      }
    }
    .activity__item_container{
      width: 100%;
      height: 50vh;
      margin-top: 5vh;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;
      .activity__item{
        border-radius: 2rem;
        width: 20vw;
        height: 30vw;
        background-color: rgba(128, 128, 128, 0.2);
        box-shadow: 10px 10px 20px #000000b5;
        transition: all 0.5s;  
        @media all and (max-width: 1199px){
          margin: 2.5vw;
          width: 40vw;
          height: 30vh;          
        }
        @media all and (max-width: 479px){
          margin: 2.5vw;
          width: 45vw;
          height: 30vh;
        }
        &:hover {
          transform: scale(1.05);
          cursor: pointer;
          opacity: 0.8;
        }
        &:active {
          transition: 0s;
          background-color: lightgray;
        }
      }
    }    
  }
}

</style>