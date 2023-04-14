import { useUserStore } from '@/store';
import Admin from "@/views/Admin/Admin.vue";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";


export const admin = {
  path: "/admin",
  component: Admin,
  meta: {
    requiresAuth: true
  },
  children: [
    {
      path: 'brands',
      name:"BrandAdmin",
      component: () => import("@/components/Admin/Brand/BrandTable.vue"),
    },
    {
      path: 'categories',
      name:"CategoryAdmin",
      component: () => import("@/components/Admin/Category/CategoryTable.vue"),
    },
  ]
  ,
  beforeEnter: (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const userStore = useUserStore();
    if (_to.meta.requiresAuth && userStore.getToken.value && userStore.getUser.value?.roles?.some(role => role === "AD")) {
      next();
    } else {
      next({name: "Home"});
    }
  },
};
