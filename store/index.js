import { getToken, setToken, removeToken } from "~/auth";

export const state = () => ({
  token: null,
  user: null,
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
    setToken(token);
  },
  setUser(state, user) {
    state.user = user;
  },
};

export const actions = {
  async signin({ commit }, { email, password }) {
    try {
      const response = await this.app.$axios.post("/signin", {
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
      const response = await this.app.$axios.post("/api/users", {
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
  checkToken() {
    backToken = getToken();
    return backToken === state.token;
  },
  logout({ commit }) {
    commit("setToken", null);
    commit("setUser", null);
    removeToken();
  },
};
