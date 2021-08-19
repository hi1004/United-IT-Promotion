<template>
  <section
    class="contact__section"
    id="contact">
    <div class="contact__title_wrap">
      <h2
        id="contact__title">
      </h2>
    </div>    
    <RouterLink
      :to="'/contact'"
      id="contact__btn"
      class="nav-link btn btn-info back-to-position to-top delay-4"
      active-class="active">
      <span class="material-icons">contact_support</span>
      CONTACT
    </RouterLink>
  </section>
</template>


<style lang="scss" scoped>
.contact__section {
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
    transition: .2s;
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
 @media all and (max-width: 615px) {
  .contact__section {
    min-height: 100vh;
    background-color: #171818;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Black Han Sans', sans-serif;
    #contact__title {
      font-size: 2.8rem;
      margin: 5vh 0;
      &:after {
        font-size: 2.8rem;
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
    height: 60px;
    width: 200px;
    margin: 2rem 0;
    font-size: 1.5rem;    
    span {
      font-size: 1.5rem;
      margin-right: 10px;
    }
  }
}
 }
</style>