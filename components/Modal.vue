<template>
  <article class="modal-wrap">
    <div class="modal-container">
      <span class="icon-close" @click="modalStore.setModalClosed" />
      <h1>{{ modalType }}</h1>
      <form>
        <!-- <component :is="modalType">{{ modalType }}</component> -->
        <LogIn v-if="modalType === 'LogIn'" />
        <Register v-if="modalType === 'Register'" />
      </form>
    </div>
  </article>
</template>

<script setup>
const modalStore = useModalStore();

const { modalType } = await storeToRefs(modalStore);
const handleClickaway = () => {
  modalStore.setModalClosed();
};
</script>

<style scoped>
.modal-wrap {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.modal-container {
  width: 400px;
  padding: 30px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border-radius: 14px;
  cursor: pointer;
}
.icon-close {
  width: 20px;
  height: 20px;
  position: absolute;
  right: -25px;
  top: -25px;
}
.icon-close::after {
  width: 100%;
  display: inline-block;
  content: "";
  border: 1px solid white;
  transform: rotate(45deg);
  position: absolute;
  top: 50%;
  left: 0;
}
.icon-close::before {
  width: 100%;
  display: inline-block;
  content: "";
  border: 1px solid white;
  transform: rotate(-45deg);
  position: absolute;
  top: 50%;
  left: 0;
}
</style>
