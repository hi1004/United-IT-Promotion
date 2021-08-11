<template>
  <section
    class="contect__section"
    id="contact">
    <div class="contact__title_wrap">
      <h2
        id="contact__title">
      </h2>
    </div>    
    <RouterLink
      :to="'/contact'"
      class="nav-link btn btn-info back-to-position to-top delay-3s"
      active-class="active">
      <span class="material-icons">contact_support</span>
      CONTACT
    </RouterLink>
  </section>
</template>



<style lang="scss" scoped>
.contect__section {
  min-height: 100vh;
  background-color: #171818;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Black Han Sans', sans-serif;
  #contact__title {
    font-size: 5rem;
    margin: 5vh 0;
    &:after {
      font-size: 5rem;
      content: 'Ι';
      animation-name: twinkling;
      animation-duration: .5s;
      animation-direction: alternate;
      animation-iteration-count: infinite;
      animation-timing-function: step-end;
    }
    @keyframes twinkling {
      0% {
        opacity: 0;
      }      
      50% {
        opacity: 1;
      }
      100%{
        opacity: 0;
      }
    }
  }
  .btn {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 300px;
    margin: 2rem 0;
    font-size: 2rem;    
    span {
      font-size: 2rem;
      margin-right: 10px;
    } 
  }
}
</style>