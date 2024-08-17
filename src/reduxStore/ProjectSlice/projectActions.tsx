import { createAction } from '@reduxjs/toolkit';
import {
  ProjectDetails,
  ProjectsList,
} from '../../Interfaces/projectInterface';
import { CardData } from '../../Interfaces/sharedInterface';

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
  cardsData: CardData[];
}>('projects/getProjectsCardsSuccess');

export const projectCardsDataFailure = createAction<string>(
  'projects/getProjectsCardsFailure',
);

// Get Projects List
export const projectsList = createAction('projects/getProjectsList');

export const projectsListSuccess = createAction<{
  projectsList: ProjectsList;
}>('projects/getProjectsListSuccess');

export const projectsListFailure = createAction<string>(
  'projects/getProjectsListFailure',
);
