import { useState, ReactNode, FC } from 'react';
import AuthContext from './authContext';
import { postRegister } from '../../services/authService';
import { RegisterPostData } from '../../Interfaces/authInterface';

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
    } catch (err: any) {
      setRegisterError(err.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const onLogin = () => {
    console.log('Loged In Successfully');
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
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
