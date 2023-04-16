import User from "@/models/User";
import type { UserType } from "@/types/user";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { computed } from "vue";

const useUserStore = defineStore("user", () => {
  // State
  const users: Ref<UserType[]> = ref([]);

  // Getters
  const getUsers = computed(() => users);

  // Action
  const fetchUsers = async () => {
    const { data } = await new User().list();
    setUsers(data);
  }

  const setUsers = (newUsers: UserType[]) => users.value = newUsers;

  return { getUsers, fetchUsers };
});

export default useUserStore;
