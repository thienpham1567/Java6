import { useGlobalStore } from "@/store";
import type { ProductType } from "@/types/product";
import { defineStore } from "pinia";
import Product from "@/models/Product";

interface ProductState {
  productList: ProductType[];
}

export default defineStore("product", {
  state: (): ProductState => ({
    productList: [],
  }),

  getters: {
    products(): ProductType[] {
      return this.productList;
    },
  },

  actions: {
    async getList() {
      const { getLoading, setLoading } = useGlobalStore();
      setLoading(false);
      const { data } = await new Product().list();
      this.productList = data;
      setLoading(true);
    },
  },

  // Data persistence destination
  persist: {
    key: "product",
    storage: window.sessionStorage,
  },
});
