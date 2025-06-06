export interface AuthFormData {
  email: string;
  password: string;
  name: string;
  rememberMe: boolean;
}

export interface AuthFormErrors {
  email?: string;
  password?: string;
  name?: string;
}

export type AuthFormType = "login" | "signup";
