<template>
  <div
    class="side-navbar"
    id="navbar">
    <div class="side-nav">
      <a
        href="#"
        class="side-nav__logo">
        <img
          src="~/assets/logo/sn_logo_icon.png"
          alt="sn_logo_icon"
          class="logo-icon" />
        <img
          src="~/assets/logo/sn_logo_title.png"
          alt="sn_logo_title"
          class="logo-title" />
      </a>
      <div class="side-nav__list">
        <a
          href="#"
          class="side-nav__link">
          <span class="material-icons"> home </span>
          <span class="slide-nav__name">Home</span>
        </a>
        <a
          href="#"
          class="side-nav__link">
          <span class="material-icons">info</span>
          <span class="slide-nav__name">About</span>
        </a>

        <div class="side-nav__link collapse cursor__hover_el">
          <span class="material-icons"> groups </span>
          <span class="side-nav__name">Executives</span>
          <span class="material-icons collapse__link"> expand_more </span>
          <ul class="collapse__menu menu__executives">
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

        <div class="side-nav__link collapse cursor__hover_el">
          <span class="material-icons"> local_activity </span>
          <span class="side-nav__name">Activities</span>
          <span class="material-icons collapse__link"> expand_more </span>
          <ul class="collapse__menu menu__activities">
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
      <div
    
        class="side-nav__brand cursor__hover_el">
        <!-- <span
          class="material-icons side-nav__toggle"
          id="nav-toggle"> menu </span> -->
        <div
          class="side-nav__toggle"
          id="nav-toggle">
          <span class="top"></span>
          <span class="mid"></span>
          <span class="bottom"></span>
        </div>
      </div>

      <div class="side-nav__routeBtns nav-pills">
        <div class="routeBtn nav-item">
          <RouterLink
            :to="'/'"
            class="nav-link"
            active-class="active">
            <img
              src="~/assets/korea.png"
              alt="korea" />
            KR
          </RouterLink>
        </div>
        <div class="routeBtn nav-item">
          <RouterLink
            :to="'/jp'"
            class="nav-link"
            active-class="active">
            <img
              src="~/assets/japan.png"
              alt="japan" />
            JP
          </RouterLink>
        </div>
        <div class="routeBtn nav-item">
          <RouterLink
            :to="'/contact'"
            class="nav-link"
            active-class="active">
            <span class="material-icons"> contact_support </span>
            CONTACT
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import sidebarMenu from '~/config/etc/sidebarMenu';
  export default {
    mounted() {
      sidebarMenu();

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
    },
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

    &__logo {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 170px;
      height: 45px;
      .logo-icon {
        width: 45px;
        height: 45px;
      }
      .logo-title {
        width: 90px;
        height: 45px;
      }
    }

    &__brand {
      display: grid;
      grid-template-columns: max-content max-content;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding: 0.75rem;
      border-radius: 0.5rem;
    }

    &__toggle {
      cursor: pointer;
      transition: 1s;
      position: relative;
      display: block;
      width: 21px;
      height: 21px;
      span {
        display: block;
        width: 100%;
        height: 3px;
        background-color: $white-color;
        transition: 0.4s;
        position: absolute;
        &.mid {
          top: 50%;
          transform: translateY(-50%);
        }
        &.top {
          top: 0px;
        }
        &.bottom {
          bottom: 0px;
        }
        // &::after {
        //   position: absolute;
        //   content: '';
        //   display: block;
        //   width: 100%;
        //   height: 2px;
        //   background-color: $white-color;
        //   bottom: -8px;
        //   left: 0;
        //   transform: translateY(0px) rotate(0deg);
        //   transition: .5s;
        // }
        // &::before {
        //   position: absolute;
        //   content: '';
        //   display: block;
        //   width: 100%;
        //   height: 2px;
        //   background-color: $white-color;
        //   top: -8px;
        //   left: 0;
        //   transform: translateY(0px) rotate(0deg);
        //   transition: .5s;
        // }
      }
      &.toggle-active {
        span {
          &.mid {
            opacity: 0;
          }
          &.top {
            transform: translateY(8px) rotate(-45deg);
               background-color: rgb(255, 54, 54);
          }
          &.bottom {
            transform: translateY(-9px) rotate(45deg);
            background-color: rgb(255, 54, 54);
          }
        }
      }
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

  .routeBtn {
    img {
      width: 24px;
    }
    a {
      font-family: 'Oswald', sans-serif;
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
        background-color: #fdc000;
      }
    }
  }
</style>
