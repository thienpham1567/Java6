import type { LoginParams } from "@/types/user";
import { HTTPBaseService } from "@/utils/request";

class Account extends HTTPBaseService {
  public constructor() {
    super();
  }

  async login(params: LoginParams): Promise<string> {
    const { data } = await this.instance.post("users/login", params);
    const token = data;
    return token;
  }
}

export default Account;
