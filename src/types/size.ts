export interface SizeType {
  sizeId?: number;
  categoryId?: number;
  value?: string;
}
export interface OrderResponse {
  status: boolean;
  data?: SizeType;
  message?: string;
}

export interface ListResponse {
  status: boolean;
  data: SizeType[];
  message?: string;
}
