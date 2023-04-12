export interface UserType {
  sub?: string;
  iat?: number;
  exp?: number;
  user?: {
    email?: string;
    role?: { authority?: string }[];
  };
}
export interface User {
  email?: string;
  role?: { authority?: string }[];
}
export interface LoginParams {
  email: string;
  password: string;
}
