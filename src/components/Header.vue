<template>
  <header>
    <div class="container">
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
  import Logo from '~/components/Logo';
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
            href: '/ja',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  header {
    .container {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: 'Oswald', sans-serif;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9;
    }
  }
</style>
