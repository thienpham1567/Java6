import type { UserType } from "@/types/user";
import { defineStore } from "pinia";

interface UserState {
  currentUser: UserType;
}

export default defineStore("product", {
  state: (): UserState => ({
    currentUser: {},
  }),

  getters: {

  },

  actions: {
  },

  // Data persistence destination
  persist: {
    key: "user",
    storage: window.sessionStorage,
  },
});
