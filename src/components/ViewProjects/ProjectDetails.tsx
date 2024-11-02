import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import {
  BADGE_DARK_BG_COLOR,
  DARK_BG_COLOR,
  DARK_THEME,
  LIGHT_BG_COLOR,
} from '../../utils/constants';
import { getStatusBgColor, getStatusColor } from '../../utils/sharedFunctions';

const ProjectDetails = () => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Grid
      item
      xs={12}
      md={4}
      lg={3}
      sx={{
        height: { xs: 'fit-content', md: '-webkit-fill-available' },
        mb: 3,
      }}>
      <Box
        sx={{
          backgroundColor:
            theme.palette.mode === DARK_THEME ? DARK_BG_COLOR : LIGHT_BG_COLOR,
          borderRadius: '8px',
          p: 2,
          height: '100%',
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={12}>
            <Typography component="h1" variant="h2" textAlign="center">
              Project Details
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body1">
              <strong>Status:</strong>
              <span
                className="status"
                style={{
                  color: getStatusColor('in-progress'),
                  backgroundColor:
                    theme.palette.mode === DARK_THEME
                      ? BADGE_DARK_BG_COLOR
                      : getStatusBgColor('in-progress'),
                }}>
                In Progress
              </span>
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body1">
              <strong>Owner:</strong> {isXS && <br />} John Doe
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body1">
              <strong>Project Name:</strong> {isXS && <br />} Project ABC
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body1">
              <strong>Created At:</strong> {isXS && <br />} 2024-12-31
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body1">
              <strong>Project Type:</strong> {isXS && <br />} Development
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body1">
              <strong>Start Date:</strong> {isXS && <br />} 2024-01-01
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body1">
              <strong>End Date:</strong> {isXS && <br />} 2024-12-31
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body1">
              <strong>Description:</strong> {isXS && <br />} This is a project
              description.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default ProjectDetails;
