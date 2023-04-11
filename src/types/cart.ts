import type { CartItemType } from "./cartItem";

export interface CartType {
  cartId?: string;
  ItemTotalQuantity?: number;
  ItemSubtotalPrice?: number;
  cartItems?: CartItemType[];
}

export type UpdateParams = Omit<CartType, "id">;

export interface CreationResponse {
  status: boolean;
  data: CartType;
  message?: string;
}

export interface CartResponse {
  status: boolean;
  data?: CartType;
  message?: string;
}
