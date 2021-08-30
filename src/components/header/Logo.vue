<template>
  <RouterLink
    to="/"
    class="logo mobile-router">
    <img
      src="~/assets/logo/logo.png"
      alt="logo" />
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main";
.logo {
  img {
    display: inline-block;
    width: 135px;
    transition: .2s;
  }
}
@media all and (max-width: 575px) {
.logo {
  img {
    display: inline-block;
    width: 100px;
  }
}
}
</style>