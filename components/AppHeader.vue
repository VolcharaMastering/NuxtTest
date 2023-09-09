<template>
  <nav class="header-nav">
    <nuxt-link to="/"
      ><img src="../assets/images/logo.png" alt="logo picture"
    /></nuxt-link>
    <AppButton buttonLabel="Get all users" @click="handleGetUsers" />
    <AppButton v-if="autheristed" buttonLabel="Update user" />
    <AppButton v-if="autheristed" buttonLabel="Delete user" />
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
    <AppButton
      v-if="autheristed"
      @click="openModal('LogIn')"
      buttonLabel="Exit"
    />
  </nav>
  <Modal v-if="showModal" @modalClose="closeModal" :modalName="modalFlag" />
</template>

<script>
const myStore = useMyStore();
// const { users } = storeToRefs(myStore);
export default {
  data() {
    return {
      autheristed: false,
      showModal: false,
      modalFlag: "",
    };
  },
  methods: {
    openModal(flag) {
      this.modalFlag = flag;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },

    handleGetUsers() {
      myStore.getUsers();
    },
  },
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
