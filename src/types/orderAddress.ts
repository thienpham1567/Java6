export interface OrderAddressType {
  orderAddressId?: number;
  address: string;
  ward?: string;
  district?: string;
  phoneNumber?: string;
}

export interface CreationParams {
  address: string;
  ward?: string;
  district?: string;
  phoneNumber?: string;
}

export type UpdateParams = Omit<OrderAddressType, "id">;

export interface CreationResponse {
  status: boolean;
  data: { id: number };
  message?: string;
}


