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
