import { defineStore } from "pinia";

interface GlobalState {
  loading: boolean;
}

export default defineStore("global", {
  state: (): GlobalState => ({
    loading: true,
  }),

  getters: {
    getLoading(): boolean {
      return this.loading;
    },
  },

  actions: {
    setLoading(display: boolean): void {
      this.loading = display;
    },
  },
});
