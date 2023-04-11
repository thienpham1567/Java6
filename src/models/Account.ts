import type { LoginParams } from "@/types/user";
import { HTTPBaseService } from "@/utils/request";

class Account extends HTTPBaseService {
  public constructor() {
    super();
  }

  async login(params: LoginParams): Promise<string> {
    return await this.instance.post("/login", params);
  }

}

export default Account;
