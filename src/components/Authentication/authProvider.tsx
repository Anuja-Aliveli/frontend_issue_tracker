import { useState, ReactNode, FC } from 'react';
import AuthContext from './authContext';

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [reEnterPassword, setReEnterPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const onRegister = () => {
    console.log('Registered Successfully');
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
        onRegister,
        showPassword,
        handleMouseDownPassword,
        handleClickShowPassword,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
