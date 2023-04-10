import type { ProductType } from "./product";

export interface ProductItemType {
  productItemId?: number;
  productId?: number;
  colorId?: number;
  sizeId?: number;
  sku?:string;
  price?:number;
  quantityInStock?:number;
  imageUrl?:string;
  status?:string;
  product?:ProductType;
}

export interface CreationParams {
  productId?: number;
  colorId?: number;
  sizeId?: number;
  sku?:string;
  price?:number;
  quantityInStock?:number;
  imageUrl?:string;
  status?:string;
}

export type UpdateParams = Omit<ProductItemType, "id">;

export interface CreationResponse {
  status: boolean;
  data: { id: number };
  message?: string;
}

export interface ProductItemResponse {
  status: boolean;
  data?: ProductItemType;
  message?: string;
}

export interface ListResponse {
  status: boolean;
  data: ProductItemType[];
  message?: string;
}

export interface QueryProductItemParams {
  brand?: number;
  category?: number;
}
