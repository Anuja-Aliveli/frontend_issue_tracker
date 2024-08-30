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
const ProjectView = () => {
  const [tabValue, setTabValue] = useState('overview');
  const handleTabChange = (event: SyntheticEvent, newTabValue: string) => {
    setTabValue(newTabValue);
  };
  return (
    <>
      <Grid container>
        <Grid item>
          <Box sx={{ width: '100%' }}>
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
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectView;
