<template>
  <nav class="header-nav">
    <nuxt-link to="/"
      ><img src="../assets/images/logo.png" alt="logo picture"
    /></nuxt-link>
    <AppButton />
    <AppButton />
    <AppButton />
    <AppButton />
  </nav>
</template>

<script setup></script>

<style scoped>
.header-nav {
  background: rgb(198, 198, 225);
  width: 100%;
  box-sizing: border-box;
  height: 80px;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
