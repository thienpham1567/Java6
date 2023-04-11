import { HTTPBaseService } from "@/utils/request";
import type { CartResponse } from "@/types/cart";
import type { CartItemType } from "@/types/cartItem";

class Cart extends HTTPBaseService {
  public constructor() {
    super();
  }

  async list(): Promise<CartResponse> {
    return await this.instance.get("/cart");
  }

  async detail(id: string): Promise<CartResponse> {
    return await this.instance.get(`/cart/${id}`);
  }

  async create(params: CartItemType): Promise<CartResponse> {
    return await this.instance.post(`/cart/update`, params);
  }

  delete(cartId: string, cartItem: number): void {
    let params = { cartItem };
    this.instance.delete(`/cart/remove/${cartId}`, { params });
  }
}

export default Cart;
