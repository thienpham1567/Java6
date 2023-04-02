import type { OrderDetailType } from "./orderDetail";

export interface OrderType{
	orderId?:number;
	userId?:number;
	orderStatusId?:number;
  orderAddress?:string;
	orderAmount?:number;
  orderItems?:OrderDetailType[];
}

export interface CreationParams {
	userId?:number;
	orderStatusId?:number;
  orderAddress?:string;
	orderAmount?:number;
  orderItems?:OrderDetailType[];
}

export type UpdateParams = Omit<OrderType, "id">;

export interface CreationResponse {
  status: boolean;
  data: { id: number };
  message?: string;
}

export interface OrderResponse {
  status: boolean;
  data?: OrderType;
  message?: string;
}
