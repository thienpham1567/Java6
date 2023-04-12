import Layout from "@/layout/index.vue";
import { useUserStore } from "@/store";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export const checkout = {
  path: "/checkout",
  component: Layout,
  children: [
    {
      path: "",
      name: "Checkout",
      component: () => import("@/views/Checkout/Checkout.vue"),
      meta: {
        requiresGuest: true,
      },
      beforeEnter: (
        _to: RouteLocationNormalized,
        _from: RouteLocationNormalized,
        next: NavigationGuardNext
      ) => {
        const userStore = useUserStore();
        if (_to.meta.requiresGuest && !userStore.getToken.value) {
          next({ name: "Login" });
        } else {
          next();
        }
      },
    },
  ],
};
