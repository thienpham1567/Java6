import type { LoginParams } from "@/types/user";
import { HTTPBaseService } from "@/utils/request";

class Account extends HTTPBaseService {
  public constructor() {
    super();
  }

  async login(params: LoginParams): Promise<string> {
    // return await this.instance.post("users/login", params);
    const response = await this.instance.post("users/login", params);
  // Trích xuất giá trị token từ response data hoặc response data.token
  const token = response.data.token || response.data;
  return token;
  }

}

export default Account;
