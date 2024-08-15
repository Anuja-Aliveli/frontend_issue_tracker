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

// Get Project Cards
export const projectCardsData = createAction('projects/getProjectsCards');

export const projectCardsDataSuccess = createAction<{
  cardsData: any;
}>('projects/getProjectsCardsSuccess');

export const projectCardsDataFailure = createAction<string>(
  'projects/getProjectsCardsFailure',
);
