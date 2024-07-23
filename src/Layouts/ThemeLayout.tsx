import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import { Outlet } from 'react-router-dom';
import {
  ThemeContextProvider,
  useThemeContext,
} from '../Contexts/useThemeContext';
import { DARK_THEME, LIGHT_THEME } from '../utils/constants';

const ThemeContextLayout = () => {
  const { toggleDarkMode } = useThemeContext();

  const customTheme = createTheme(
    theme(toggleDarkMode ? DARK_THEME : LIGHT_THEME),
  );
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
};

const ThemeProviderWrapper: React.FC = () => (
  <ThemeContextProvider>
    <ThemeContextLayout />
  </ThemeContextProvider>
);

export default ThemeProviderWrapper;
