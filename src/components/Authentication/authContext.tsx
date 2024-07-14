import { createContext } from 'react';

interface AuthContextType {
  userName: string;
  setUserName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  reEnterPassword: string;
  setReEnterPassword: (value: string) => void;
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: any) => void;
  onLogin: () => void;
  onRegister: () => void;
  registerError: string;
  setRegisterError: (value: string) => void;
  isLoading: boolean;
  loginError: string;
  setLoginError: (value: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
