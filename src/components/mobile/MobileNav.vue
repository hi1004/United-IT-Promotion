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
            href="#">Home</a>
        </li>
        <li>
          <a
            class="mobile-nav__link"
            href="#">About</a>
        </li>
        <li>
          <a
            class="mobile-nav__link"
            href="#">Executives</a>
        </li>
        <li>
          <a
            class="mobile-nav__link"
            href="#">Activities</a>
        </li>
        <li>
          <a
            class="mobile-nav__link"
            href="#">
            <span class="material-icons">contact_support</span>
            Contact</a>
        </li>
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
        transition: all .5s;
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
              font-size: 18px;
              font-weight: 500;
              padding: 8px 15px;
              border-radius: 5px;
              letter-spacing: 1px;
              transition: all 0.3s ease;
              
              &.link_actived {
                font-size: 20px;
                color: #fdc000;
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
        height: 100vh;
        width: 100%;
        text-align: center;
        display: block;
        transition: all 0.3s ease;
        &.menu-active {
          right: -100%;
        }
      }
     
      #click:checked ~ ul {
        left: 0;
      }
      nav ul li {
        width: 100%;
        margin: 40px 0;
      }
      nav ul li a {
        width: 100%;
        margin-left: -100%;
        display: block;
        font-size: 20px;
        transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      #click:checked ~ ul li a {
        margin-left: 0px;
      }
      nav ul li a.active,
      nav ul li a:hover {
        background: none;
        color: cyan;
      }
    }
  
  }
</style>
