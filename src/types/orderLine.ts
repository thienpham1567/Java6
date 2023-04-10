export interface OrderLineType {
  orderLineId?: number;
  productItemId?: number;
  orderId?: number;
  price?: number;
  quantity?: number;
}

export interface CreationParams {
  productId?: number;
  orderId?: number;
  price?: number;
  quantity?: number;
}

export type UpdateParams = Omit<OrderLineType, "id">;

export interface CreationResponse {
  status: boolean;
  data: { id: number };
  message?: string;
}

export interface OrderResponse {
  status: boolean;
  data?: OrderLineType;
  message?: string;
}
