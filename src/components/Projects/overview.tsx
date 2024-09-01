import React, { useState, useRef } from 'react';
import {
  Button,
  ButtonGroup,
  Grid,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  DARK_BG_COLOR,
  DARK_THEME,
  LIGHT_BG_COLOR,
} from '../../utils/constants';
import { CardData } from '../../Interfaces/sharedInterface';
import CountCard from '../Common/countCard';

const OverviewTab: React.FC = () => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.only('xs'));
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const anchorRef = useRef<HTMLDivElement>(null);

  const options = ['Edit', 'Close', 'Create Category'];

  const cardDataArray: CardData[] = [
    {
      count: 25,
      label: 'Categories',
      bg: '#ffebc6',
      color: '#ff4500',
    },
    {
      count: 12,
      label: 'Sub Categories',
      bg: '#bff1e9',
      color: '#1aa3ea',
    },
    {
      count: 8,
      label: 'Issues',
      bg: '#fffbb6',
      color: '#ffce0f',
    },

    {
      count: 8,
      label: 'Team Members',
      bg: '#fffbb6',
      color: '#ffce0f',
    },
  ];

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          width: '100%',
          p: 2,
        }}>
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}>
          <Grid item>
            <Button variant="contained" color="success" startIcon={<AddIcon />}>
              Create
            </Button>
          </Grid>
          <Grid item>
            <ButtonGroup
              variant="contained"
              ref={anchorRef}
              aria-label="split button">
              <Button onClick={handleClick}>Actions</Button>
              <Button
                size="small"
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}>
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Menu
              id="split-button-menu"
              anchorEl={anchorRef.current}
              open={open}
              onClose={handleClose}>
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
          <Grid item xs={12}>
            <CountCard cardsData={cardDataArray} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor:
            theme.palette.mode === DARK_THEME ? DARK_BG_COLOR : LIGHT_BG_COLOR,
          borderRadius: '8px',
          p: 2,
          pt: 0,
        }}>
        <Typography component="h1" variant="h3">
          Recent Activity
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OverviewTab;
