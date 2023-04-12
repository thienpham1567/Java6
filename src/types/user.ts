export interface UserType {
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
