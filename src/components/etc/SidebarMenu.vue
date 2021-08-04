<template>
  <div
    class="side-navbar"
    id="navbar">
    <div class="side-nav">
      <div>
        <div class="side-nav__brand">
          <span
            class="material-icons side-nav__toggle"
            id="nav-toggle"> menu </span>
          <a
            href="#"
            class="side-nav__logo">J-bit</a>
        </div>

        <div class="slide-nav__list">
          <a
            href="#"
            class="side-nav__link color-active">
            <span class="material-icons"> home </span>
            <span class="slide-nav__name">Home</span>
          </a>
          <a
            href="#"
            class="side-nav__link">
            <span class="material-icons">info</span>
            <span class="slide-nav__name">About</span>
          </a>

          <div class="side-nav__link collapse">
            <span class="material-icons"> groups </span>
            <span class="side-nav__name">Executivives</span>

            <span class="material-icons collapse__link"> expand_more </span>
            <ul class="collapse__menu">
              <a
                href="#"
                class="collapse__sublink">회장</a>
              <a
                href="#"
                class="collapse__sublink">부회장</a>
              <a
                href="#"
                class="collapse__sublink">총무</a>
              <a
                href="#"
                class="collapse__sublink">홍보 부장</a>
              <a
                href="#"
                class="collapse__sublink"
                v-for="n in 6"
                :key="n"> {{ n }}조 조장 </a>
            </ul>
          </div>

          <div class="side-nav__link collapse">
            <span class="material-icons"> local_activity </span>
            <span class="side-nav__name">Activities</span>

            <span class="material-icons collapse__link"> expand_more </span>
            <ul class="collapse__menu">
              <a
                href="#"
                class="collapse__sublink">1</a>
              <a
                href="#"
                class="collapse__sublink">2</a>
              <a
                href="#"
                class="collapse__sublink">3</a>
            </ul>
          </div>
        </div>
      </div>
      <a
        href="#"
        class="side-nav__link">
        <span class="side-nav__name">test</span>
      </a>
    </div>
  </div>
</template>

<script>
  import sidebarMenu from '~/config/etc/sidebarMenu';
  export default {    
    mounted() {
      sidebarMenu();
    }
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  $nav-width: 92px;

  /*===== Colores =====*/
  $first-color: #0c5df4;
  $bg-color: #12192c;
  $sub-color: #b6cefc;
  $white-color: #fff;

  /*===== Fuente y tipografia =====*/
  $body-font: 'Poppins', sans-serif;
  $normal-font-size: 1rem;
  $small-font-size: 0.875rem;

  /*===== z index =====*/
  $z-fixed: 100;

  /*===== BASE =====*/
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }
  body {
    position: relative;
    margin: 0;
    padding: 2rem 0 0 6.75rem;
    font-family: $body-font;
    font-size: $normal-font-size;
    transition: 0.5s;
  }
  h1 {
    margin: 0;
  }

  /*===== l NAV =====*/
  .side-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: $nav-width;
    height: 100vh;
    background-color: $bg-color;
    color: #fff;
    padding: 1.5rem 1.5rem 2rem;
    transition: 0.5s;
    z-index: $z-fixed;
  }

  /*===== NAV =====*/
  .side-nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    &__brand {
      display: grid;
      grid-template-columns: max-content max-content;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
    &__toggle {
      font-size: 1.25rem;
      padding: 0.75rem;
      cursor: pointer;
    }
    &__logo {
      color: $white-color;
      font-weight: 600;
    }

    &__link {
      display: grid;
      grid-template-columns: max-content max-content;
      align-items: center;
      column-gap: 0.75rem;
      padding: 0.75rem;
      color: $white-color;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        background-color: $first-color;
        color: $white-color;
      }
    }
    &__icon {
      font-size: 1.25rem;
    }
    &__name {
      font-size: $small-font-size;
    }
  }
  /*Expander menu*/
  .expander {
    width: calc(92px + 9.25rem);
  }
  /*Add padding body*/
  .body-pd {
    padding: 2rem 0 0 15rem;
  }

  /*Active links menu*/
  .color-active {
    background-color: $first-color;
  }

  /*===== COLLAPSE =====*/
  .collapse {
    grid-template-columns: 20px max-content 1fr;

    &__link {
      justify-self: flex-end;
      transition: 0.5s;
    }

    &__menu {
      display: none;
      padding: 0.75rem 2.25rem;
    }
    &__sublink {
      color: $sub-color;
      font-size: $small-font-size;
      width: $nav-width;
      display: block;
      &:hover {
        color: $white-color;
      }
    }
    &:not(.show) {
      display: grid;
    }
  }

  /*Show collapse*/
  .showCollapse {
    display: block;
  }

  /*Rotate icon*/
  .rotate {
    transform: rotate(180deg);
  }
</style>
