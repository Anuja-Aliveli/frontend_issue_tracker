import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ReportIcon from '@mui/icons-material/Report';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import useMediaQuery from '@mui/material/useMediaQuery';

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const items = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Create Project', icon: <AddBoxIcon /> },
    { text: 'Projects', icon: <WorkIcon /> },
    { text: 'Create Issue', icon: <AddBoxIcon /> },
    { text: 'Issues', icon: <ReportIcon /> },
    { text: 'Bookmark', icon: <BookmarkIcon /> },
  ];

  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100% !important',
        height: '100% !important',
      }}>
      <List
        sx={{
          width: '100% !important',
          paddingTop: '0px',
        }}>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
              sx={{
                '&.Mui-selected': {
                  color: theme.palette.mode === 'light' ? '#0959AA' : '#55a6f6',
                  backgroundColor:
                    theme.palette.mode === 'light' ? '#F0F7FF' : '#0b1b28',
                  border:
                    theme.palette.mode === 'light'
                      ? '1px solid #d2e8ff'
                      : '1px solid #023b73',
                  '&:hover': {
                    backgroundColor:
                      theme.palette.mode === 'light' ? '#F0F7FF' : '#0b1b28',
                  },
                },
              }}>
              <ListItemIcon
                sx={{
                  color: selectedIndex === index ? '#0959AA' : '#c7d0dd',
                }}>
                {item.icon}
              </ListItemIcon>
              {isSmUp && (
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
