<template>
  <div class="history-container">
    <div class="history-item solo">
      <h1 class="year">
        2011
      </h1>
      <h5 class="description">
        Captain America: The First Avenger
      </h5>
    </div>
    <div class="history-item teamup">
      <h1 class="year">
        2012
      </h1>
      <h5 class="description">
        Marvel's The Avengers
      </h5>
    </div>
    <div class="history-item solo">
      <h1 class="year">
        2014
      </h1>
      <h5 class="description">
        Captain America: The Winter Soldier
      </h5>
    </div>
    <div class="history-item teamup">
      <h1 class="year">
        2015
      </h1>
      <h5 class="description">
        Avengers: Age of Ultron
      </h5>
    </div>
    <div class="history-item solo">
      <h1 class="year">
        2016
      </h1>
      <h5 class="description">
        Captain America: Civil War
      </h5>
    </div>
    <div class="history-item teamup">
      <h1 class="year">
        2018
      </h1>
      <h5 class="description">
        Avengers: Infinity War
      </h5>
    </div>
    <div class="history-item teamup">
      <h1 class="year">
        2019
      </h1>
      <h5 class="description">
        Avengers: Endgame
      </h5>
    </div>
  </div>
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
.history-container{
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
}
.history-item{
  width: 30vw;
  opacity: 0;
  transition: 1s ease-out; 
  margin: 15vh auto;     

  &.active{
    opacity: 1;
    transition: 0.8s ease-in;
    &.solo{
      transform: translateX(-20vw);
      text-align: right;
    }
    &.teamup{
      transform: translateX(20vw);
      text-align: left;
    }
  }
}

</style>