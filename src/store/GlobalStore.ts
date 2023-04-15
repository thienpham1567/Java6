import { defineStore } from "pinia";
import { computed } from "vue";
import { ref, type Ref } from "vue";

const useGlobalStore = defineStore("global", () => {
  // State
  const loading: Ref<boolean> = ref(true);
  const showPopup: Ref<boolean> = ref(false);

  // Getters
  const getLoading = computed(() => loading);
  const getShowPopup = computed(() => showPopup);

  // Action
  const setLoading = (display: boolean): void => {
    loading.value = display;
  }

  const setShowPopup = (display: boolean): void => {
    showPopup.value = display;
  }

  return { getLoading, getShowPopup, setLoading, setShowPopup };
});

export default useGlobalStore;
