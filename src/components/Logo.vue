<template>
  <RouterLink
    to="/"
    class="logo">
    <img
      src="~/assets/logo.png"
      alt="logo" />
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main";
.logo {
  img {
    display: block;
  }
  &:hover {
     filter: drop-shadow(3px 13px 18px $primary) invert(10%);
  }
}
</style>