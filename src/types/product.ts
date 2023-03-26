export interface ProductType {
  id?:number,
  name?:string,
  imageLink?:string,
  inStock?:number,
  created?:Date,
  isAvailable?:boolean,
  brandId?:number,
  categoryId?:number,
}

export interface CreationParams {
  name:string,
  image_link:string,
  in_stock:number,
  is_available:boolean,
  brand_id:number,
  category_id:number,
}

export type UpdateParams = Omit<ProductType, 'id'>;

export interface CreationResponse {
  status: boolean
  data: { id: number }
  message?: string
}

export interface ProductResponse {
  status: boolean
  data?: ProductType
  message?: string
}

export interface ListResponse {
  status: boolean
  data: ProductType[]
  message?: string
}

export interface QueryProductParams {
  brand_id?:number,
  category_id?:number,
}
