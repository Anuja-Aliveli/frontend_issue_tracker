import React, { useState, ReactNode, FC } from 'react';
import AuthContext from './authContext';

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [darkModeOn, setDarkModeOn] = useState(true);
  const [englishLanguage, setEnglishLanguage] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        darkModeOn,
        setDarkModeOn,
        englishLanguage,
        setEnglishLanguage,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
