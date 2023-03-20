export interface CategoryType {

}

export interface CreationParam {

}

export type UpdateParam = Omit<CategoryType, 'id'>;

export interface CreationResponse {
  status: boolean
  data: { id: number }
  message?: string
}

export interface AdminResponse {
  status: boolean
  data?: CategoryType
  message?: string
}

export interface ListResponse {
  status: boolean
  data: CategoryType[]
  message?: string
}
