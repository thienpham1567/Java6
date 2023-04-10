import type { OrderLineType } from "./orderLine";

export interface OrderType{
	orderId?:number;
	userId?:number;
	orderStatus?:string;
  denormalizedAddress?:string;
	orderTotalPrice?:number;
  orderItems?:OrderLineType[];
  createdAt?:Date;
  updatedAt?:Date;
}

export interface CreationParams {
	userId?:number;
	orderStatus?:string;
  denormalizedAddress?:string;
	orderTotalPrice?:number;
  orderItems?:OrderLineType[];
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
