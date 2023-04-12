import Layout from "@/layout/index.vue";
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
      ) => {},
    },
  ],
};
