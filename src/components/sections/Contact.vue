<template>
  <section
    class="contect__section"
    id="contact">
    <h2 class="back-to-position to-top delay-0">
      가입 신청 및 문의하기
    </h2>
    <RouterLink
      :to="'/contact'"
      class="nav-link btn btn-info back-to-position to-top delay-1"
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
 

  h2 {
    font-size: 5rem;
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