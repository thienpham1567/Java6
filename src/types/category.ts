export interface CategoryType {
  categoryId?: number;
  code?: string;
  description?: string;
}

export interface CreationParams {
  code: string;
  description: string;
}

export type UpdateParams = Omit<CategoryType, "id">;

export interface CreationResponse {
  status: boolean;
  data: { id: number };
  message?: string;
}

export interface CategoryResponse {
  status: boolean;
  data?: CategoryType;
  message?: string;
}

export interface ListResponse {
  status: boolean;
  data: CategoryType[];
  message?: string;
}
