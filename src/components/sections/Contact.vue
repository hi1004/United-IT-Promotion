<template>
  <section
    class="contect__section"
    id="contact">
    <div class="contact__title_wrap">
      <h2
        id="contact__title"
        class="back-to-position to-top">
      </h2>
    </div>    
    <RouterLink
      :to="'/contact'"
      class="nav-link btn btn-info back-to-position to-top delay-5"
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
    &:after {
      font-size: 5rem;
      content: 'Ι';
      animation-name: twinkling;
      animation-duration: .8s;
      animation-direction: alternate;
      animation-iteration-count: infinite;
    }
    @keyframes twinkling {
      0% {
        opacity: 0;
      }      
      100% {
        opacity: 1;
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