import Layout from "@/layout/index.vue";

export const checkout = {
  path: "/checkout",
  component: Layout,
  children: [
    {
      path: "",
      name: "Checkout",
      component: () => import("@/views/Checkout/Checkout.vue"),
    },
  ],
};
