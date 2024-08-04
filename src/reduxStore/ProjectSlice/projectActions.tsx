import { createAction } from '@reduxjs/toolkit';
import { ProjectDetails } from '../../Interfaces/projectInterface';

// create project
export const createProject = createAction('projects/createProject');

export const createProjectSuccess = createAction<{
  projectDetails: ProjectDetails;
}>('projects/createProjectSuccess');

export const createProjectFailure = createAction<string>(
  'projects/createProjectFailure',
);
