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
            name: 'KO',
            href: '/',
          },
          {
            name: 'JA',
            href: '/jp',
          },
          {
            name: 'ABOUT',
            href: '/about',
          },
        ],
      };
    },
    mounted() {
      const navEls = document.querySelectorAll('.nav-link');
      const navEl_Last = navEls[navEls.length - 1]
        navEl_Last.addEventListener('click', ()=>{
          window.location.reload();
        })
    }
  };
</script>

<style lang="scss" scoped>
  header {
    .container {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: 'Oswald',sans-serif;
      font-weight:900;
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
     
      z-index:99;
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
  }
</style>
