import Layout from "@/layout/index.vue";

export const product = {
  path: "/products",
  component: Layout,
  children: [
    {
      path: "",
      name: "Products",
      component: () => import("@/views/Product/ProductList.vue"),
    },
    {
      path: ":productId(\\d+)",
      name: "Product",
      component: () => import("@/components/Product/Product.vue"),
    },
  ],
};
