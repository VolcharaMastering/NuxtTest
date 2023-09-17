<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import auth from "./plugins/auth";

const myStore = useMyStore();
onMounted(async () => {
  await auth();
});
</script>
<style>
#body {
  background-color: blanchedalmond;
}
</style>
