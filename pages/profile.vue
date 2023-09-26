<template>
  <div class="profile-page">
    <h1>Welcome! {{ user.name }}</h1>
    <p>Check the action</p>
  </div>
</template>

<script setup>
const myStore = useMyStore();
const user = computed(() => myStore.user);
// definePageMeta({
//   middleware: ["authorized"]
// });
</script>

<style scoped>
.profile-page {
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
