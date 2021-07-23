<template>
  <!-- Font Asesome -->
  <section class="content__container">
    <button class="content__section_btn btn_up">
      <i class="fas fa-chevron-up"></i>
    </button>
    <button class="content__section_btn btn_down">
      <i class="fas fa-chevron-down"></i>
    </button>       
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

@keyframes btn-effect{
  from{
    opacity: 0.1;    
  }
  to{
    opacity: 0.3;
  }
}

.content__container{
  .content__section_btn{
    display: block;
    left: 50vw;
    transform: translateX(-50%);
    position: fixed;
    background-color: transparent;
    border: none;
    font-size: 10vw;
    font-stretch: ultra-expanded;
    transition: 0.5s;
    animation-name: btn-effect;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;
    &.btn_hide{
      display: none;
    }
    &.btn_up{
      top: 0;
    }
    &.btn_down{
      bottom: 0;      
    }
    &:hover{
      animation-play-state: paused;      
      i.fas{
        transform: scale(1.2);
      }      
    }
    &:active{
      opacity: 1;
    }
    i.fas{      
      transition: 0.5s;
      color: white;
      text-shadow: 0 0 1vw;
    }
  }
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
        border-radius: 0.5rem;
        margin: 3vh 0;
        width: 20vw;
        height: 25vw;
        background-color: rgba(64, 64, 64, 0.1);
        box-shadow: 3vw 3vw 5vw #000000b5;
        transition: all 0.5s;  
        @media all and (max-width: 1199px){
          margin: 2.5vw 0;
          width: 35vw;
          height: 30vw;
          min-width: 210px;
          min-height: 180px;       
        }
        @media all and (max-width: 479px){
          width: 45vw;
          height: 55vw;
          min-width: 45px;
          min-height: 55px;
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