import { Box, Container, Grid } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Outlet } from 'react-router-dom';
import { LIGHT_THEME } from '../../utils/constants';
const Main = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: '100% !important',
        width: '100% !important',
        maxWidth: '100% !important',
        padding: '0px !important',
      }}>
      <Navbar />
      <Box
        sx={{
          height: '-webkit-fill-available',
          paddingTop: '50px',
        }}>
        <Grid
          container
          spacing={2}
          sx={{ height: '-webkit-fill-available', marginTop: '0px' }}>
          {isMdUp && (
            <Grid
              item
              sx={{
                paddingTop: '0px !important',
                boxShadow:
                  theme.palette.mode === LIGHT_THEME
                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                    : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
              }}>
              <Sidebar />
            </Grid>
          )}
          <Grid
            item
            xs
            sx={{
              backgroundColor:
                theme.palette.mode === 'dark' ? '#17181a' : '#e8e9eb',
              padding: '1rem',
            }}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Main;
