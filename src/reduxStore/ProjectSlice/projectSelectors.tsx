import { RootState } from '../../store';

export const selectProjectDetails = (state: RootState) =>
  state.projects.projectDetails;
