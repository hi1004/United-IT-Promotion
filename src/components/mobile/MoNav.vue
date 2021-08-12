<template>
  <header class="header">
    <nav>
      <div class="logo">
        <img
          src="~/assets/logo/logo.png"
          alt="mo-logo" />
      </div>
      <input
        type="checkbox"
        id="click" />
      <label
        for="click"
        class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
        <li>
          <a
            class="active"
            href="#">Home</a>
        </li>
        <li><a href="#about">About</a></li>
        <li><a href="#">Executives</a></li>
        <li><a href="#">Activities</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    mounted() {},
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
        font-family: 'Poppins', sans-serif;
      }
      nav {
        display: flex;
        height: 80px;
        width: 100%;
        background: #1b1b1b;
        align-items: center;
        justify-content: space-between;
        padding: 0 50px 0 50px;
        flex-wrap: wrap;
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
            a {
              color: #f2f2f2;
              text-decoration: none;
              font-size: 18px;
              font-weight: 500;
              padding: 8px 15px;
              border-radius: 5px;
              letter-spacing: 1px;
              transition: all 0.3s ease;
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
      nav ul li a.active,
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
    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: -1;
      width: 100%;
      padding: 0 30px;
      color: #1b1b1b;
    }
    .content div {
      font-size: 40px;
      font-weight: 700;
    }
  }
</style>
