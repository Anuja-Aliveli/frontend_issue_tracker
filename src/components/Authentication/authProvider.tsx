import { useState, ReactNode, FC } from 'react';
import AuthContext from './authContext';
import {
  getEmail,
  postLogin,
  postRegister,
  updatePassword,
} from '../../services/authService';
import {
  GetEmailInterface,
  ForgotPasswordSteps,
  updatePasswordInterface,
} from '../../Interfaces/authInterface';
import { useNavigate } from 'react-router-dom';

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [reEnterPassword, setReEnterPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>('');
  const [getEmailData, setEmailData] = useState<GetEmailInterface | null>(null);
  const [checkEmailError, setCheckEmailError] = useState<string>('');
  const [passwordUpdateResult, setPasswordUpdateResult] = useState<string>('');
  const [showStep, setShowStep] = useState<ForgotPasswordSteps>(
    ForgotPasswordSteps.Email,
  );
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const onRegister = async () => {
    setLoading(true);
    try {
      const requestBody = {
        user_name: userName,
        email: email,
        password: password,
      };
      const data = await postRegister(requestBody);
      navigate('/login');
    } catch (err: any) {
      setRegisterError(err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const onLogin = async () => {
    setLoading(true);
    try {
      const requestBody = {
        user_name: userName,
        password: password,
      };
      const data = await postLogin(requestBody);
      const { token, user_name, email } = data;
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('email', JSON.stringify(email));
      localStorage.setItem('userName', JSON.stringify(user_name));
      navigate('/other');
    } catch (err: any) {
      setLoginError(err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const onForgotPassword = async (email: string) => {
    setLoading(true);
    try {
      const data = await getEmail(email);
      setEmailData(data);
      setShowStep(ForgotPasswordSteps.Otp);
    } catch (err: any) {
      setCheckEmailError(err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const onResetPassword = async () => {
    setLoading(true);
    try {
      const requestBody = {
        password: password,
        email: email,
      };
      const data = await updatePassword(requestBody);
      setEmail('');
      setPassword('');
      navigate('/login');
    } catch (err: any) {
      setPasswordUpdateResult(err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userName,
        setUserName,
        email,
        setEmail,
        password,
        setPassword,
        reEnterPassword,
        setReEnterPassword,
        showPassword,
        handleMouseDownPassword,
        handleClickShowPassword,
        onRegister,
        onLogin,
        registerError,
        setRegisterError,
        isLoading,
        loginError,
        setLoginError,
        getEmailData,
        onForgotPassword,
        showStep,
        setShowStep,
        checkEmailError,
        setCheckEmailError,
        passwordUpdateResult,
        onResetPassword,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
