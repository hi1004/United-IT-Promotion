<template>
  <div
    class="side-navbar"
    id="navbar">
    <div class="side-nav">
      <a        
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
          class="side-nav__link">
          <span class="material-icons"> home </span>
          <span class="side-nav__name">Home</span>
          <span class="side-nav__tooltip">Home</span>
        </a>
        <a          
          class="side-nav__link">
          <span class="material-icons">info</span>
          <span class="side-nav__name">About</span>
          <span class="side-nav__tooltip">About</span>
        </a>

        <div class="side-nav__link collapse cursor__hover_el">
          <span class="material-icons"> groups </span>
          <span class="side-nav__name">Executives</span>
          <span class="side-nav__tooltip">Executives</span>
          <span class="material-icons collapse__link"> expand_more </span>
          <ul class="collapse__menu menu__executives">
            <a              
              class="collapse__sublink">회장</a>
            <a              
              class="collapse__sublink">부회장</a>
            <a              
              class="collapse__sublink">총무</a>
            <a              
              class="collapse__sublink">홍보 부장</a>
            <a              
              class="collapse__sublink"
              v-for="n in 6"
              :key="n"> {{ n }}조 조장 </a>
          </ul>
        </div>

        <div class="side-nav__link collapse cursor__hover_el">
          <span class="material-icons"> local_activity </span>
          <span class="side-nav__name">Activities</span>
          <span class="side-nav__tooltip">Activities</span>
          <span class="material-icons collapse__link"> expand_more </span>
          <ul class="collapse__menu menu__activities">
            <a              
              class="collapse__sublink">PROGRAMMING</a>
            <a              
              class="collapse__sublink">KR↔JP</a>
            <a              
              class="collapse__sublink">JOB STUDY</a>
          </ul>
        </div>
        <a
          
          class="side-nav__link">
          <span class="material-icons"> contact_support </span>
          <span class="side-nav__name">Contact</span>
          <span class="side-nav__tooltip">Contact</span>
        </a>
      </div>
      <div
        class="side-nav__brand cursor__hover_el"
        id="nav-toggle">
        <div class="side-nav__toggle">
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
            <span class="side-nav__tooltip">KR</span>
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
            <span class="side-nav__tooltip">JP</span>
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
  $z-fixed: 999;

  /*===== BASE =====*/
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  
  }
  
  body {
    margin: 0;
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
      margin-bottom: 0.3rem;
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
      position: absolute;
      top: 15%;
      right: -20px;
      width: 40px;
      height: 40px;
      background-color: #f5f5f5;
      cursor: pointer;
      border: 5px solid #12192c;
      border-radius: 50%;
      padding: 0.75rem;
      &::before {
        content: '\f054';
        font-family: 'Font Awesome 5 Free';
        position: absolute;
        width: 100%;
        height: 100%;
        line-height: 30px;
        text-align: center;
        font-weight: 900;
        color: #0c5df4;
      }
      &.toggle-active::before {
        content: '\f053';
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
      }
      &:hover {
        background-color: #0c5df4;
        &::before {
          color: #fff;
        }
      }
    }

    &__toggle {
      cursor: pointer;
      transition: 1s;
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }

    &__link {
      display: grid;
      grid-template-columns: max-content max-content;
      align-items: center;
      column-gap: 0.75rem;
      padding: 0.75rem;
      color: $white-color;
      border-radius: 0.5rem;
      margin-bottom: 0.48rem;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        background-color: $first-color;
        color: $white-color;
        .side-nav__tooltip {
          transform: translateY(-15%) translateX(10px);
          visibility: visible;
          opacity: 1;
        }
      }
    }
    &__icon {
      font-size: 1.25rem;
    }
    &__name {
      font-size: $small-font-size;
    }
    &__tooltip {
      position: absolute;
      left: 72px;
      display: block;
      background-color: #0c5df4;
      width: auto;
      padding: 5px 10px;
      transform: translateY(-15%) translate(0);
      border-radius: 6px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      visibility: hidden;
      opacity: 0;
      transition: 0.5s;
      color: #fff;
      &::before {
        content: '';
        position: absolute;
        top: 48%;
        left: -8px;
        width: 12px;
        height: 12px;
        background-color: #0c5df4;
        transform: rotate(45deg) translateY(-50%);
        border-radius: 2px;
        transition: 0.5s;
      }
      &:hover {
        color: #0c5df4;
        background-color: #fff;
        &::before {
          background-color: #fff;
        }
      }
    }
  }
  /*Expander menu*/
  .expander {
    width: calc(92px + 9.25rem);
  }
  
  /*Add padding body*/
  .body-pd-reset {
    padding: 0;
  }
  .body-pd-default {
    padding: 0 0 0 92px;
  }
  .body-pd-expander {
    padding: 0 0 0 15rem;
  }

  /*Active links menu*/
  .color-active {
    background-color: $first-color;
  }
  .collapse__sublink.sublink-active {
    font-weight: 900;
    color: #fff;
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

  /* hide ToolTip */
  .snToolTip-active {
    display: none !important;
  }

  .routeBtn {
    img {
      width: 24px;
    }
    a.nav-link {
      font-family: 'Oswald', sans-serif;
      display: grid;
      grid-template-columns: max-content max-content;
      align-items: center;
      column-gap: 0.75rem;
      padding: 0.75rem;
      color: $white-color;
      border-radius: 0.5rem;
      margin-bottom: 0.48rem;
      transition: 0.3s;
      cursor: pointer;
      
      &:hover {
        background-color: #fdc000;
        .side-nav__tooltip {
          transform: translateY(-15%) translateX(10px);
          visibility: visible;
          opacity: 1;
        }
      }
      .side-nav__tooltip {
        position: absolute;
        left: 72px;
        display: block;
        background-color: #fdc000;
        width: auto;
        padding: 5px 10px;
        transform: translateY(-15%) translate(0);
        border-radius: 6px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        visibility: hidden;
        opacity: 0;
        transition: 0.5s;
        color: #fff;
        &::before {
          content: '';
          position: absolute;
          top: 48%;
          left: -8px;
          width: 12px;
          height: 12px;
          background: #fdc000;
          transform: rotate(45deg) translateY(-50%);
          border-radius: 2px;
          transition: 0.5s;
        }
        &:hover {
          color: #fdc000;
          background-color: #fff;
          &::before {
            background-color: #fff;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    #navbar {
      display: none;
    }
  }
</style>
