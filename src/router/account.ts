import Layout from "@/layout/index.vue";

export const account = {
  path: "/account",
  component: Layout,
  children: [
    {
      path: "",
      name: "Account",
      component: () => import("@/views/Account/Account.vue"),
    },
    {
      path: "login",
      name: "Login",
      component: () => import("@/views/Login/Login.vue"),
    },
    {
      path: "register",
      name: "Register",
      component: () => import("@/views/Registration/Registration.vue"),
    },
  ],
};
