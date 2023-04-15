import type { UserType } from "@/types/user";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { computed } from "vue";

const useUserStore = defineStore("user", () => {
  // State
  const users: Ref<UserType[]> = ref(null);

  // Getters

  // Action

  return {  };
});

export default useUserStore;
