<template>
  <header>
    <div class="container main-tool-bar">
      <Logo />
      <div class="nav nav-pills">
        <div
          v-for="nav in navigations"
          :key="nav.name"
          class="nav-item">
          <RouterLink
            :to="nav.href"
            active-class="active"
            class="nav-link">
            {{ nav.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from '~/components/header/Logo';
  export default {
    components: {
      Logo,
    },
    data() {
      return {
        navigations: [
          {
            name: 'KR',
            href: '/',
          },
          {
            name: 'JP',
            href: '/jp',
          },
          {
            name: 'CONTACT',
            href: '/contact',
          },
        ],
      };
    },
    mounted() {
      const bodyEl = document.querySelector('body');
      bodyEl.width = window.innerWidth;

      window.addEventListener('resize', () => {
        bodyEl.width = window.innerWidth;
        init();
      });
      function init() {
         const navEls = document.querySelectorAll('.nav-link');
          const navEl_Last = navEls[navEls.length - 1];
        if (bodyEl.width >= 1021) {
          navEl_Last.addEventListener('click', () => {
            window.location.reload();
          });
        }
        navEl_Last.classList.add('btn')
        navEl_Last.classList.add('btn-info')
      }
      init();
    },
  };
</script>

<style lang="scss" scoped>
@media all and (max-width: 575px) {
  .nav-link {
        padding: 0.5rem;
        font-size: 14px;
      }
  header {
    .container {
      padding: 0 20px;
    }
  }
}
  header {
    .container {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: 'Oswald', sans-serif;
      font-weight: 900;
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;
    }
    .main-tool-bar {
      transition: ease 0.4s;
      opacity: 0;
      &--scrolled {
        height: 40px;
      }
      &.show-tool-bar {
        opacity: 1;
      }
    }
    .nav-item:last-child {
      a {
        color: rgb(75, 170, 207);
        &.active {
          background-color: rgb(75, 170, 207);
          color: #fff;
        }
      }
    }
    .nav-link {
      transition: .5s ease-out;
    }
  }
</style>
