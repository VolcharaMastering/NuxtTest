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
    async signin(email, password) {
      try {
        const response = await $axios.post("/signin", {
          email,
          password,
        });
        const { token, user, email } = response.data;
        commit("setToken", token);
        commit("setUser", user);
      } catch (error) {
        return Promise.reject(
          `Bug detected! ${error.response.status}: ${error.response.statusText}`,
        );
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
