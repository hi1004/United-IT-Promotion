<template>
  <header class="header">
    <nav class="mobile-nav">
      <div class="logo">
        <img
          src="~/assets/logo/logo.png"
          alt="mo-logo" />
      </div>
      <input
        type="checkbox"
        name="menuBtn"
        id="click" />
      <label
        for="click"
        class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul class="mobile-nav__menu">
        <li>
          <a
            class="mobile-nav__link"
            href="#">
            <span class="material-icons"> home </span>
            Home</a>
        </li>
        <li>
          <a
            class="mobile-nav__link"
            href="#">
            <span class="material-icons">info</span>
            About</a>
        </li>
        <li>
          <a
            class="mobile-nav__link"
            href="#">
            <span class="material-icons"> groups </span>
            Executives</a>
        </li>
        <li>
          <a
            class="mobile-nav__link"
            href="#">
            <span class="material-icons"> local_activity </span>
            Activities</a>
        </li>
        <li>
          <a
            class="mobile-nav__link"
            href="#">
            <span class="material-icons">contact_support</span>
            Contact</a>
        </li>
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
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
  import mobileNav from '~/config/etc/mobileNav';
  export default {
    mounted() {
      mobileNav();
    },
  };
</script>

<style lang="scss" scoped>
  /*===== GOOGLE FONTS =====*/
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

  /* 769 이상 */
  @media screen and (min-width: 769px) {
    header {
      opacity: 0;
      visibility: hidden;
      display: none;
    }
  }
  /* 768 이하 */
  @media screen and (max-width: 768px) {
    /*===== VARIABLES CSS =====*/
    a.nav-link {
      margin: 0;
    }
    header {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      nav {
        display: flex;
        height: 80px;
        width: 100%;
        background: #12192c;
        align-items: center;
        justify-content: space-between;
        padding: 0 25px 0 25px;
        flex-wrap: wrap;
        transition: all 0.5s;
        &.nav-active {
          background-color: #111;
        }

        .logo {
          color: #fff;
          font-size: 35px;
          font-weight: 600;
          img {
            width: 100px;
          }
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          li {
            margin: 0 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .mobile-nav__link {
              color: #f2f2f2;
              text-decoration: none;
              font-size: 2.5rem;
              font-weight: 500;
              padding: 8px 15px;
              border-radius: 5px;
              letter-spacing: 1px;
              transition: all 0.3s ease;

              &.link_actived {
                font-size: 2.6rem;
                color: #fdc000;
              }
              span {
                font-size: 2.5rem;
              }
            }
          }
        }
        .menu-btn i {
          color: #fff;
          font-size: 22px;
          cursor: pointer;
          display: none;
        }
      }
      nav ul li a:hover {
        color: #111;
        background: #fff;
      }

      input[type='checkbox'] {
        display: none;
      }
      nav .menu-btn i {
        display: block;
      }
      #click:checked ~ .menu-btn i:before {
        content: '\f00d';
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
      }
      .fas {
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
      }
      nav ul {
        position: fixed;
        top: 80px;
        left: -100%;
        background: #111;
        height: calc(100% - 80px);
        width: 100%;
        text-align: center;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        &.menu-active {
          right: -100%;
        }
      }

      #click:checked ~ ul {
        left: 0;
      }
      nav ul li {
        width: 100%;
        // margin: 20px 0;
      }
      nav ul li a {
        width: 100%;
        margin-left: -100%;
        display: block;
        font-size: 20px;
        transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      .side-nav__routeBtns {
        display: flex;
        justify-content: center;
        .routeBtn:nth-child(1) {
          margin-right: 0.5rem;
        }
      }
      #click:checked ~ ul li a {
        margin-left: 0px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
      }
      nav ul li a.active,
      nav ul li a:hover {
        background: none;
        color: cyan;
      }
    }
  }
</style>
