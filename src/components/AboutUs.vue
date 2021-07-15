<template>
  <div class="container">
    <div
      v-for="keyword in keywords"
      :key="keyword.name"
      class="nav-item">
      <RouterLink
        :to="keyword.href"
        active-class="active"
        class="nav-link">
        {{ keyword.name }}
      </RouterLink>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keywords: [
          {
            name: 'JAVA',
            href: '/java',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
.container {
  @import '~/scss/main';
  display: flex;
  justify-content: space-between;
}
</style>
