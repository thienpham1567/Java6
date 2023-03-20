export interface BrandType {

}

export interface CreationParam {

}

export type UpdateParam = Omit<BrandType, 'id'>;

export interface CreationResponse {
  status: boolean
  data: { id: number }
  message?: string
}

export interface AdminResponse {
  status: boolean
  data?: BrandType
  message?: string
}

export interface ListResponse {
  status: boolean
  data: BrandType[]
  message?: string
}
