import {
  Box,
  Grid,
  Tab,
  Tabs,
  useTheme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import {
  BADGE_DARK_BG_COLOR,
  CATEGORIES_TAB,
  CATEGORIES_TAB_VALUE,
  DARK_BG_COLOR,
  DARK_THEME,
  ISSUES_TAB,
  ISSUES_TAB_VALUE,
  LIGHT_BG_COLOR,
  OVERVIEW_TAB,
  OVERVIEW_TAB_VALUE,
} from '../../utils/constants';
import OverviewTab from './overview';
import { getStatusBgColor, getStatusColor } from '../../utils/sharedFunctions';

const ProjectView = () => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.only('xs')); // Check if the screen size is xs
  const [tabValue, setTabValue] = useState(OVERVIEW_TAB_VALUE);

  const handleTabChange = (event: SyntheticEvent, newTabValue: string) => {
    setTabValue(newTabValue);
  };

  return (
    <>
      <Box sx={{ p: 2, height: '100%' }}>
        <Grid container spacing={{ xs: 1, md: 3 }} sx={{ height: '100%' }}>
          <Grid item xs={12}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="Project tabs">
              <Tab
                icon={<ImportContactsOutlinedIcon />}
                value={OVERVIEW_TAB_VALUE}
                label={OVERVIEW_TAB}
              />

              <Tab
                icon={<LayersOutlinedIcon />}
                value={CATEGORIES_TAB_VALUE}
                label={CATEGORIES_TAB}
              />

              <Tab
                icon={<AdjustOutlinedIcon />}
                value={ISSUES_TAB_VALUE}
                label={ISSUES_TAB}
              />
            </Tabs>
          </Grid>
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
                  theme.palette.mode === DARK_THEME
                    ? DARK_BG_COLOR
                    : LIGHT_BG_COLOR,
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
                <Grid item xs={6} sm={6} md={12}>
                  <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    <strong>Owner:</strong> {isXS && <br />}{' '}
                    <span>John Doe</span>
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
                  <Typography variant="body1">
                    <strong>Project Name:</strong> {isXS && <br />}
                    <span>Project ABC</span>
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
                  <Typography variant="body1">
                    <strong>Created At:</strong> {isXS && <br />}
                    <span>2024-12-31</span>
                  </Typography>
                </Grid>

                <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
                  <Typography variant="body1">
                    <strong>Project Type:</strong>
                    {isXS && <br />}
                    <span>Development</span>
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
                  <Typography variant="body1">
                    <strong>Start Date:</strong>
                    {isXS && <br />}
                    <span>2024-01-01</span>
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={12} sx={{ textAlign: 'center' }}>
                  <Typography variant="body1">
                    <strong>End Date:</strong> {isXS && <br />}
                    <span>2024-12-31</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Typography variant="body1">
                    <strong>Description:</strong>
                    {isXS && <br />}
                    <span>This is a project description.</span>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={9}
            sx={{
              height: '-webkit-fill-available',
              maxHeight: { xs: '45vh', sm: '58vh', md: 'none' },
              mb: 3,
            }}>
            <Box
              sx={{
                p: 2,
                pr: 0,
                height: '100%',
              }}>
              {tabValue === OVERVIEW_TAB_VALUE && <OverviewTab />}
              {tabValue === CATEGORIES_TAB_VALUE && <p>Categories Content</p>}
              {tabValue === ISSUES_TAB_VALUE && <p>Issues Content</p>}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProjectView;
