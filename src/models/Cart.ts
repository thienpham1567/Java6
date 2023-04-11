import { HTTPBaseService } from "@/utils/request";
import type { CartResponse, ListResponse } from "@/types/cart";
import type { CartItemType } from "@/types/cartItem";

class Cart extends HTTPBaseService {
  public constructor() {
    super();
  }

  async list(params: {cartId?: string}): Promise<ListResponse> {
    return await this.instance.get("/cart", { params });
  }

  async detail(id: string): Promise<CartResponse> {
    return await this.instance.get(`/cart/${id}`);
  }

  async create(params: CartItemType): Promise<CartResponse> {
    return await this.instance.post(`/cart/update`, params);
  }

  async delete(cartId: string, cartItem: number): Promise<CartResponse> {
    let params = { cartItem };
    return await this.instance.delete(`/cart/remove/${cartId}`, { params });
  }
}

export default Cart;
