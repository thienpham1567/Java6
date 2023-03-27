import type { OrderType } from "@/types/order";
import { defineStore } from "pinia";

interface OrderState {
  myOrder: OrderType;
}

export default defineStore("product", {
  state: (): OrderState => ({
    myOrder: {},
  }),

  getters: {

  },

  actions: {
  },

  // Data persistence destination
  persist: {
    key: "order",
    storage: window.sessionStorage,
  },
});
