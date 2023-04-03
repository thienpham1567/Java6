export interface OrderDetailType {
  orderDetailId?: number;
  productId?: number;
  orderId?: number;
  detailPrice?: number;
  quantity?: number;
}

export interface CreationParams {
  productId?: number;
  orderId?: number;
  detailPrice?: number;
  quantity?: number;
}

export type UpdateParams = Omit<OrderDetailType, "id">;

export interface CreationResponse {
  status: boolean;
  data: { id: number };
  message?: string;
}

export interface OrderResponse {
  status: boolean;
  data?: OrderDetailType;
  message?: string;
}
