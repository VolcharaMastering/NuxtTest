export default defineNuxtRouteMiddleware(async (to, from) => {
  const myStore = useMyStore();
  if (!myStore.user) {
    return await navigateTo("/");
  }
});
