<template>
  <label class="label">
    Email
    <input class="input" type="email" v-model="email" />
  </label>
  <label class="label">
    Password
    <input class="input" type="password" v-model="password" />
  </label>
  <FuncButton buttonLabel="Enter" @click.prevent="handleLogIn" />
</template>

<script setup>
const modalStore = useModalStore();
const myStore = useMyStore();

const email = ref(null);
const password = ref(null);

const handleLogIn = async () => {
  try {
    await myStore.signIn(email.value, password.value);
    const user = computed(() => myStore.user);
    if (user) {
      modalStore.setModalClosed();
      await navigateTo("/profile", { replace: true });
    }
  } catch {
    console.log("error");
  }
};
</script>

<style scoped>
.label {
  display: flex;
  flex-direction: column;
  margin: 15px 0;
}

.input {
  padding: 7px 15px;
}
</style>
