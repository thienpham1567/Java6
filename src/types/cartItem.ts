import type { ProductType } from "./product";

export interface CartItemType {
  cartItemId?: number;
  productItemId?: number;
  orderId?: number;
  price?: number;
  quantity?: number;
  cartId?:string;
}

export interface CreationParams {
  productItemId?: number;
  cartId?: string;
  quantity?: number;
}

export type UpdateParams = Omit<CartItemType, "id">;

export interface CreationResponse {
  status: boolean;
  data: { id: number };
  message?: string;
}

export interface OrderResponse {
  status: boolean;
  data?: CartItemType;
  message?: string;
}
