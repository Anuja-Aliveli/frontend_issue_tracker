export interface registerErrorsInterface {
  userName: boolean;
  email: boolean;
  password: boolean;
  reEnterPassword: boolean;
}

export interface loginErrorsInterface {
  userName: boolean;
  password: boolean;
}

export interface LoginPostData {
  user_name: string;
  password: string;
}

export interface RegisterPostData {
  user_name: string;
  email: string;
  password: string;
}

export interface GetEmailInterface {
  user_email_found: boolean;
  verification_code: string;
}

export enum ForgotPasswordSteps {
  Email = 'email',
  Otp = 'otp',
  Reset = 'reset',
}

export interface PasswordErrors {
  password: boolean;
  reEnterPassword: boolean;
}

export interface updatePasswordInterface {
  user_email_found: boolean;
  message: string;
}

export interface PostResetData {
  password: string;
  email: string;
}
