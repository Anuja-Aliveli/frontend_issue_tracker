import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useThemeContext } from '../../Contexts/useThemeContext';

const Navbar = () => {
  const { toggleTheme, toggleDarkMode } = useThemeContext();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My App
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          <Brightness4Icon />
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
