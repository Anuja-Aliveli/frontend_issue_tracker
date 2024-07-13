import { createContext } from 'react';

interface AuthContextType {
  darkModeOn: boolean;
  setDarkModeOn: (value: boolean) => void;
  englishLanguage: boolean;
  setEnglishLanguage: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
