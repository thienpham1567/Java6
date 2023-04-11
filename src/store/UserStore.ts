import Account from "@/models/Account";
import type { UserType } from "@/types/user";
import { defineStore } from "pinia";
import type { Ref } from "vue";
import { ref } from "vue";
import jwt_decode from "jwt-decode";

const useUserStore = defineStore("user", () => {
  const user: Ref<UserType> = ref({});

  async function login(email: string, password: string) {
    const token = await new Account().login({email,password});
    const user = jwt_decode(token);
    console.log(user);
  }

  return { login }
});

export default useUserStore;
