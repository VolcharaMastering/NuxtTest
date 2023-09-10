import { defineStore } from "pinia";
import axios from "~/plugins/axios";
import { getToken, setToken, removeToken } from "~/auth";
const $axios = axios().provide.axios;

export const useMyStore = defineStore("userStore", {
  state: () => ({
    token: null,
    user: null,
    usersData: [],
  }),
  actions: {
    async signIn(email, password) {
      try {
        const response = await $axios.post("/signin", {
          email,
          password,
        });
        const { data, token } = response.data;
        this.user = data;
        this.token = token;
      } catch (error) {
        return `Bug detected! ${error}`;
      }
    },
    async signup(name, email, password) {
      console.log("SIGNUP", name, email, password);
      try {
        const response = await $axios.post("/signup", {
          email,
          password,
          name,
        });
        this.user = response.data;
      } catch (error) {
        return `Bug detected! ${error}`;
      }
    },
    async getUsers() {
      try {
        const response = await $axios.get("/users");
        this.usersData = response.data;
      } catch (error) {
        return `Bug detected! ${error}`;
      }
    },
    checkToken() {
      backToken = getToken();
      return backToken === state.token;
    },
    logout() {
      store.$reset();
    },
  },
});
