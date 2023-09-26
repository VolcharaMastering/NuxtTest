import auth from "~/plugins/auth";
export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("WAITING");
  await auth();
});
