import Account from "@/models/Account";
import type { UserType } from "@/types/user";
import { defineStore } from "pinia";
import type { Ref } from "vue";
import { ref } from "vue";
import jwt_decode from "jwt-decode";
import type { User } from "@/types/user";





const useUserStore = defineStore("user", () => {
  //const user: Ref<UserType> = ref({});


  async function login(email: string, password: string) {
    const token = await new Account().login({email,password});
    console.log(token);
    if (token === null) {
      alert("Đăng nhập thất bại");
    } else {
      alert("Đăng nhập thành công");
      // const decodedUser = jwt_decode(token) as UserType;
      // const jsonString = decodedUser.user;
      // console.log(decodedUser.user)
      const decodedUser = jwt_decode(token) as UserType;
      
      if (decodedUser.user) {
        const jsonString = JSON.stringify(decodedUser.user);
        const jsonObject = JSON.parse(jsonString);
        alert(jsonObject);
        // Tiếp tục xử lý jsonString
      } else {
        // Xử lý khi decodedUser.user là undefined
        alert('Decoded user object is undefined.');
        // Hoặc thực hiện một hành động tương ứng khác
      }
      
    }
    
  }

  return { login }
});

export default useUserStore;
