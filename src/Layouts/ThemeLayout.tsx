import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import { Outlet } from 'react-router-dom';

const ThemeContextLayout = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState<boolean>(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const customTheme = createTheme(theme(toggleDarkMode ? 'dark' : 'light'));
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
};

export default ThemeContextLayout;
