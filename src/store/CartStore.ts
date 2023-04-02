import type { OrderType } from "@/types/order";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from 'uuid';

interface OrderState {
  myOrder: OrderType;
}

export default defineStore("cart", {
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
