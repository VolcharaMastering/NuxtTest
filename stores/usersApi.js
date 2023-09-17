import { defineStore } from "pinia";
import axios from "~/plugins/axios";
import { getToken, setToken, removeToken } from "~/auth";
const $axios = axios().provide.axios;

export const useMyStore = defineStore("userStore", {
  state: () => ({
    token: getToken() || "",
    user: "",
    usersData: [],
    serverAnswer: null,
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
        localStorage.setItem("userData", JSON.stringify(data));
        this.token = token;
        setToken(token);
        this.serverAnswer = response.data;
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
        this.serverAnswer = response.data;
        return "Ok";
      } catch (error) {
        return `Bug detected! ${error}`;
      }
    },
    async getUsers() {
      try {
        const response = await $axios.get("/users");
        this.usersData = response.data;
        this.serverAnswer = response.data;
      } catch (error) {
        return `Bug detected! ${error}`;
      }
    },
    async checkUser() {
      const storedToken = this.token;

      // Проверьте, есть ли токен в cookie и если нет, установите его
      const cookieToken = getToken();
      if (!storedToken && cookieToken) {
        this.token = cookieToken;
      }

      if (cookieToken === storedToken) {
        this.user = JSON.parse(localStorage.getItem("userData"));
      }
    },
    logout() {
      removeToken();
    },
  },
});
