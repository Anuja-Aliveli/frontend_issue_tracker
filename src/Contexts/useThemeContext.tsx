import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextProps {
  toggleDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const [toggleDarkMode, setToggleDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ toggleDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
