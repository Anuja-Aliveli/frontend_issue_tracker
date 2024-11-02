import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import {
  BADGE_DARK_BG_COLOR,
  DARK_BG_COLOR,
  DARK_THEME,
  LIGHT_BG_COLOR,
} from '../../utils/constants';
import {
  formatDateTime,
  getStatusBgColor,
  getStatusColor,
} from '../../utils/sharedFunctions';
import { useSelector } from 'react-redux';
import { selectProjectDetails } from '../../reduxStore/ProjectSlice/projectSelectors';

const ProjectDetails = () => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.only('xs'));
  const projectDetails = useSelector(selectProjectDetails);

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
                  color: getStatusColor(projectDetails.project_status),
                  backgroundColor:
                    theme.palette.mode === DARK_THEME
                      ? BADGE_DARK_BG_COLOR
                      : getStatusBgColor(projectDetails.project_status),
                }}>
                {projectDetails.project_status}
              </span>
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body1">
              <strong>Owner:</strong> {isXS && <br />} {projectDetails.owner}
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body1">
              <strong>Project Name:</strong> {isXS && <br />}{' '}
              {projectDetails.project_name}
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body1">
              <strong>Created At:</strong> {isXS && <br />}
              {formatDateTime(projectDetails.created_at || '')}
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body1">
              <strong>Project Type:</strong> {isXS && <br />}{' '}
              {projectDetails.project_type}
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body1">
              <strong>Created At:</strong> {isXS && <br />}
              {formatDateTime(projectDetails.created_at || '')}
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body1">
              <strong>Created At:</strong> {isXS && <br />}
              {formatDateTime(projectDetails.created_at || '')}
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body1">
              <strong>Description:</strong> {isXS && <br />}{' '}
              {projectDetails.project_description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default ProjectDetails;
