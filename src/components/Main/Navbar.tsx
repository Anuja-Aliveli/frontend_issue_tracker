import React, { useContext, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import { useThemeContext } from '../../Contexts/useThemeContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import MainContext from './MainContext';
import { LIGHT_THEME } from '../../utils/constants';

const Navbar = () => {
  const { toggleTheme, toggleDarkMode } = useThemeContext();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();

  const mainContextDetails = useContext(MainContext);

  if (!mainContextDetails) {
    return <div>Loading...</div>;
  }

  const {
    handleLogout,
    isIconNavbar,
    setIsIconNavbar,
    drawerOpen,
    setDrawerOpen,
  } = mainContextDetails;

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const toggleDesktopSidebar = () => {
    setIsIconNavbar(!isIconNavbar);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
        }}>
        <Container
          sx={{
            width: '100% !important',
            maxWidth: '100% !important',
          }}
          disableGutters>
          <Toolbar
            variant="regular"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              bgcolor:
                theme.palette.mode === LIGHT_THEME
                  ? 'rgba(255, 255, 255, 0.4)'
                  : '#202123',
              backdropFilter: 'blur(24px)',
              minHeight: '0px !important',
              height: 50,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === LIGHT_THEME
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            }}>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}>
              {!isMdUp && (
                <Box sx={{ maxWidth: '32px' }}>
                  <Button
                    variant="text"
                    size="small"
                    aria-label="button to toggle sidebar"
                    onClick={toggleDrawer(true)}
                    sx={{ minWidth: '32px', height: '32px', p: '4px' }}>
                    <MenuIcon fontSize="medium" />
                  </Button>
                </Box>
              )}
              {isMdUp && (
                <Box sx={{ maxWidth: '32px' }}>
                  <Button
                    variant="text"
                    size="small"
                    onClick={toggleDesktopSidebar}
                    aria-label="button to toggle sidebar"
                    sx={{ minWidth: '32px', height: '32px', p: '4px' }}>
                    <MenuIcon fontSize="medium" />
                  </Button>
                </Box>
              )}
              <Typography
                component="h1"
                variant="h6"
                sx={{
                  flexGrow: 1,
                  color: theme.palette.text.primary,
                  pl: 1,
                }}>
                MyApp
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 0.5,
                alignItems: 'center',
              }}>
              <Box sx={{ maxWidth: '32px' }}>
                <Button
                  variant="text"
                  onClick={toggleTheme}
                  size="small"
                  aria-label="button to toggle theme"
                  sx={{ minWidth: '32px', height: '32px', p: '4px' }}>
                  {toggleDarkMode ? (
                    <WbSunnyRoundedIcon fontSize="small" />
                  ) : (
                    <ModeNightRoundedIcon fontSize="small" />
                  )}
                </Button>
              </Box>
              {isMdUp ? (
                <Button
                  color="primary"
                  variant="text"
                  size="small"
                  onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Button
                  color="primary"
                  variant="text"
                  size="small"
                  onClick={handleLogout}>
                  <LogoutIcon fontSize="small" />
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Sidebar />
      </Drawer>
    </>
  );
};

export default Navbar;
