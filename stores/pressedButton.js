import { defineStore } from "pinia";

export const useButtonStore = defineStore({
  id: "pressedButton",
  state: () => ({
    buttonPressed: null,
  }),
  actions: {
    setButtonPressed(buttonName) {
      this.buttonPressed = buttonName;
      console.log(this.buttonPressed);
    },
  },
});
