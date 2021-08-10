<template>
  <section
    class="contect__section"
    id="contact">
    <h2>궁금한 사항이 있으신가요?</h2>
    <RouterLink
      :to="'/contact'"
      class="nav-link btn btn-info"
      active-class="active">
      <span class="material-icons">contact_support</span>
      CONTACT
    </RouterLink>
  </section>
</template>
<script>
export default {
  mounted() {
    /* CONTACT LINK */
  const bodyEl = document.querySelector('body');
  bodyEl.width = window.innerWidth;

  window.addEventListener('resize', () => {
    bodyEl.width = window.innerWidth;
    init();
  });
  function init() {
    if (bodyEl.width >= 1021) {
      const navEls = document.querySelectorAll('.nav-link');
      const navEl_Last = navEls[navEls.length - 1];
      navEl_Last.addEventListener('click', () => {
        window.location.reload();
      });
    }
  }
  init();
 
  }
}
</script>


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
 
  }
}
</style>