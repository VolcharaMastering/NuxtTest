import Cookies from "js-cookie";

const USER_KEY = "userData";

export const getUser = () => Cookies.get(USER_KEY);

export const setUser = (user) =>
  Cookies.set(USER_KEY, user, { expires: 30 }, { secure: true });

export const removeUser = () => Cookies.remove(USER_KEY);
