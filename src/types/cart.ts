import type { CartItemType } from './cartItem';

export interface CartType{
	cartItemId?:number;
  ItemTotalQuantity?:number;
  ItemSubtotalPrice?:number;
}

export interface CreationParams {
	ItemTotalQuantity?:number;
  ItemSubtotalPrice?:number;
}

export type UpdateParams = Omit<CartType, "id">;

export interface CreationResponse {
  status: boolean;
  data: { id: number };
  message?: string;
}

export interface OrderResponse {
  status: boolean;
  data?: CartType;
  message?: string;
}
