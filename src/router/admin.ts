import Admin from "@/views/Admin/Admin.vue";


export const admin = {
  path: "/admin",
  component: Admin,
  children: [
  {
    path: "",
    name: "Admin",
    component: () => import("@/views/Admin/Admin.vue"),
  }],
};
