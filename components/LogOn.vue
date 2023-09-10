<template>
  <label class="label">
    Email
    <input class="input" type="email" v-model="email" />
  </label>
  <label class="label">
    User name
    <input class="input" type="text" v-model="userName" />
    <p>{{ userName }}</p>
  </label>
  <label class="label">
    Password
    <input class="input" type="password" v-model="password" />
  </label>
  <label class="label">
    Confirm password
    <input class="input" type="password" />
  </label>
  <FuncButton buttonLabel="Register" @click.prevent="handleLogOn" />
</template>

<script setup>
const myStore = useMyStore();
const userName = ref(null);
const email = ref(null);
const password = ref(null);

const handleLogOn = () => {
  myStore.signup(userName.value, email.value, password.value);
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
