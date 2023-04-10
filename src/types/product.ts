export interface ProductType {
  productId?: number;
  name?: string;
  description?: string;
  brandId?: number;
  categoryId?: number;
  createdAt:Date;
  updatedAt:Date;
}

export interface CreationParams {
  name?: string;
  description?: string;
  brandId?: number;
  categoryId?: number;
}

export type UpdateParams = Omit<ProductType, "id">;

export interface CreationResponse {
  status: boolean;
  data: { id: number };
  message?: string;
}

export interface ProductResponse {
  status: boolean;
  data?: ProductType;
  message?: string;
}

export interface ListResponse {
  status: boolean;
  data: ProductType[];
  message?: string;
}

export interface QueryProductParams {
  brand?: number;
  category?: number;
}
