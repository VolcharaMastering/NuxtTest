import { defineStore } from "pinia";

export const useModalStore = defineStore({
  id: "modalStore",
  state: () => ({
    modalType: "",
    modalState: false,
  }),
  actions: {
    setModalOpened(modalType) {
      this.modalType = modalType;
      this.modalState = true;
    },
    setModalClosed() {
      this.modalType = "";
      this.modalState = false;
    },
  },
});
