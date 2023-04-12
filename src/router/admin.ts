import Admin from "@/views/Admin/Admin.vue";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";


export const admin = {
  path: "/admin",
  component: Admin,
  meta: {
    requiresAuth: true
  },
  beforeEnter: (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {},
};
