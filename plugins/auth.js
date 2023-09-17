export default defineNuxtPlugin(async (nuxtApp) => {
  const myStore = useMyStore();

  if (!myStore.user) {
    await myStore.checkUser();
  }
});
