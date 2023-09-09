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
    async signin({ commit }, { email, password }) {
      try {
        const response = await $axios.post("/signin", {
          email,
          password,
        });
        const { token, user } = response.data;
        commit("setToken", token);
        commit("setUser", user);
      } catch (error) {
        return Promise.reject(
          `Bug detected! ${error.response.status}: ${error.response.statusText}`,
        );
      }
    },
    async signup({ commit }, { email, password, login }) {
      try {
        const response = await $axios.post("/api/users", {
          email,
          password,
          login,
        });
      } catch (error) {
        return Promise.reject(
          `Bug detected! ${error.response.status}: ${error.response.statusText}`,
        );
      }
    },
    async getUsers() {
      try {
        const response = await $axios.get("/users");
        this.usersData.push(response.data);
      } catch (error) {
        return Promise.reject(`Bug detected! ${error}`);
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
