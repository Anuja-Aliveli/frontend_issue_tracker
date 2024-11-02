import { Box, Grid, Tab, Tabs } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import {
  CATEGORIES_TAB,
  CATEGORIES_TAB_VALUE,
  ISSUES_TAB,
  ISSUES_TAB_VALUE,
  OVERVIEW_TAB,
  OVERVIEW_TAB_VALUE,
} from '../../utils/constants';
import OverviewTab from './overview';
import ProjectDetails from './ProjectDetails';

const ProjectView = () => {
  const [tabValue, setTabValue] = useState(OVERVIEW_TAB_VALUE);

  const handleTabChange = (event: SyntheticEvent, newTabValue: string) => {
    setTabValue(newTabValue);
  };

  const renderTabs = () => {
    return (
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
    );
  };

  const renderTabContent = () => {
    return (
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
    );
  };

  return (
    <>
      <Box sx={{ p: 2, height: '100%' }}>
        <Grid container spacing={{ xs: 1, md: 3 }} sx={{ height: '100%' }}>
          {renderTabs()}
          <ProjectDetails />
          {renderTabContent()}
        </Grid>
      </Box>
    </>
  );
};

export default ProjectView;
