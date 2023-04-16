export interface UserType {
  userId?: number;
  emailAddress?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  roles?: string[];
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface CreationParams {
  emailAddress?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

export type UpdateParams = Omit<UserType, "id">;

export interface CreationResponse {
  status: boolean;
  data: UserType;
  message?: string;
}

export interface UserResponse {
  status: boolean;
  data?: UserType;
  message?: string;
}

export interface ListResponse {
  status: boolean;
  data: UserType[];
  message?: string;
}
