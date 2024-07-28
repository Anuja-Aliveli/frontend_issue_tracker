import { createAction } from '@reduxjs/toolkit';
import { ProjectDetails } from '../../Interfaces/projectInterface';

export const onCreateProject = createAction<{ projectDetails: ProjectDetails }>(
  'projects/create',
);
