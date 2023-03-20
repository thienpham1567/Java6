export interface ProductType {
  id?:number,
  name?:string,
  image_link?:string,
  in_stock?:number,
  created?:Date,
  is_available?:boolean,
  brand_id?:number,
  category_id?:number,
}

export interface CreationParams {

}

export type UpdateParams = Omit<ProductType, 'id'>;

export interface CreationResponse {
  status: boolean
  data: { id: number }
  message?: string
}

export interface AdminResponse {
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
