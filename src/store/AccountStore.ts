import Account from "@/models/Account";
import type { UserType } from "@/types/user";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import jwt_decode from "jwt-decode";
import { computed } from "vue";
import router from "@/router";

const useAccountStore = defineStore("account", () => {
  // State
  const user: Ref<UserType | null> = ref(null);
  const userToken: Ref<string> = ref("");

  // Getters
  const getUser = computed(() => user);
  const getToken = computed(() => userToken);

  // Action
  const login = async (email: string, password: string) => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      user.value = decodeToken(localToken);
      router.push({ name: "Home" });
    } else {
      const token = await new Account().login({ email, password });
      if (token) {
        localStorage.setItem("token", token);
        user.value = decodeToken(token);
        router.push({ name: "Home" });
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    user.value = null;
    userToken.value = "";
  };

  const setToken = (newToken?: string) => {
    userToken.value = newToken;
  };

  const setUser = (newUser?: UserType) => {
    user.value = user;
  };

  const decodeToken = (token: string): UserType => {
    userToken.value = token;
    const decodedUser = jwt_decode(token);
    const userRoles: string[] = decodedUser.user.roles?.map(
      role => role.authority
    );
    const fullName = decodedUser.user.fullName.split(" ");
    return {
      emailAddress: decodedUser.user.email,
      firstName: fullName[0],
      lastName: fullName[1],
      phoneNumber: decodedUser.user.phoneNumber,
      roles: userRoles,
    };
  };
  return { getUser, getToken, login, logout, setToken, setUser };
});

export default useAccountStore;
