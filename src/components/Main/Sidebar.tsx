import React, { useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import MainContext from './MainContext';
import {
  LIGHT_THEME,
  SIDEBAR_ICON_COLOR,
  SIDEBAR_SELECTED_DARK_BG_COLOR,
  SIDEBAR_SELECTED_DARK_BORDER,
  SIDEBAR_SELECTED_DARK_COLOR,
  SIDEBAR_SELECTED_LIGHT_BG_COLOR,
  SIDEBAR_SELECTED_LIGHT_BORDER,
  SIDEBAR_SELECTED_LIGHT_COLOR,
} from '../../utils/constants';

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();

  const mainContextDetails = useContext(MainContext);
  if (!mainContextDetails) {
    return <div>Loading...</div>;
  }

  const { isIconNavbar, sideBarOptions } = mainContextDetails;

  const handleListItemClick = (index: number, route: string) => {
    setSelectedIndex(index);
    navigate(route);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100% !important',
        height: '100% !important',
      }}>
      <List
        sx={{
          width: { lg: isIconNavbar ? '72px !important' : '205px !important' },
          paddingTop: '0px',
        }}>
        {sideBarOptions.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index, item.route)}
              sx={{
                '&.Mui-selected': {
                  color:
                    theme.palette.mode === LIGHT_THEME
                      ? SIDEBAR_SELECTED_LIGHT_COLOR
                      : SIDEBAR_SELECTED_DARK_COLOR,
                  backgroundColor:
                    theme.palette.mode === LIGHT_THEME
                      ? SIDEBAR_SELECTED_LIGHT_BG_COLOR
                      : SIDEBAR_SELECTED_DARK_BG_COLOR,
                  border:
                    theme.palette.mode === LIGHT_THEME
                      ? SIDEBAR_SELECTED_LIGHT_BORDER
                      : SIDEBAR_SELECTED_DARK_BORDER,
                  '&:hover': {
                    backgroundColor:
                      theme.palette.mode === LIGHT_THEME
                        ? SIDEBAR_SELECTED_LIGHT_BG_COLOR
                        : SIDEBAR_SELECTED_DARK_BG_COLOR,
                  },
                },
              }}>
              <ListItemIcon
                sx={{
                  color:
                    selectedIndex === index
                      ? SIDEBAR_SELECTED_LIGHT_COLOR
                      : SIDEBAR_ICON_COLOR,
                }}>
                {item.icon}
              </ListItemIcon>
              {!isMdUp && (
                <ListItemText primary={item.text} sx={{ fontWeight: 'bold' }} />
              )}
              {!isIconNavbar && isMdUp && (
                <ListItemText primary={item.text} sx={{ fontWeight: 'bold' }} />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
