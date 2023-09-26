<template>
  <nav class="header-nav">
    <nuxt-link to="/"
      ><img src="../assets/images/logo.png" alt="logo picture"
    /></nuxt-link>
    <AppButton buttonLabel="Get all users" @click="handleGetUsers" />
    <AppButton
      v-if="autheristed"
      buttonLabel="Update user"
      @click="openModal('Update User')"
    />
    <AppButton
      v-if="autheristed"
      buttonLabel="Delete user"
      @click="openModal('Delete User')"
    />
    <AppButton
      v-if="!autheristed"
      @click="openModal('Register')"
      buttonLabel="Register"
    />
    <AppButton
      v-if="!autheristed"
      @click="openModal('LogIn')"
      buttonLabel="Enter"
    />
    <AppButton v-if="autheristed" @click="handleLogout" buttonLabel="Exit" />
  </nav>
  <Modal v-if="modalState" />
</template>

<script setup>
const myStore = useMyStore();
const modalStore = useModalStore();
const { modalState } = storeToRefs(modalStore);
const autheristed = computed(() => myStore.auth);
// console.log("AUTH", autheristed);

const openModal = (modalType) => {
  modalStore.setModalOpened(modalType);
};
const handleLogout = async () => {
  myStore.logout();
  myStore.$reset();
  await navigateTo("/", { replace: true });
};
const handleGetUsers = () => {
  myStore.getUsers();
};
</script>

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
