import { RootState } from '../../store';

export const selectProjectDetails = (state: RootState) =>
  state.projects.projectDetails;

export const selectIsLoading = (state: RootState) => state.projects.isLoading;

export const selectError = (state: RootState) => state.projects.error;
