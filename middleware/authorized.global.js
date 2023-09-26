// import { defineNuxtRouteMiddleware } from 'nuxt3';
// import { ref, watchEffect } from 'vue';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const myStore = useMyStore();
  const userRef = ref(myStore.user);

  // Create a watcher using watchEffect
  const unwatch = watchEffect(() => {
    userRef.value = myStore.user;
  });

  // Create a function to stop watching
  const stopWatching = () => {
    unwatch();
  };

  console.log("in middleware auth", userRef.value);

  if (!!userRef.value) {
    stopWatching(); // Stop watching if the condition is met
    return await navigateTo("/profile", { replace: true });
  }
});
