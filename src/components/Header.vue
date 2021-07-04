<template>
  <header class="container">
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
  </header>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: 'KR',
          href: '/'
        },
        {
          name: 'JP',
          href: '/jp'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    .logo {
      margin-right: 40px;
    }
  }
</style>