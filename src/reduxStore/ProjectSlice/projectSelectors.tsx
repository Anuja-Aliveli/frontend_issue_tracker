import { RootState } from '../../store';

export const selectProjectDetails = (state: RootState) =>
  state.projects.projectDetails;

export const selectIsLoading = (state: RootState) => state.projects.isLoading;

export const selectError = (state: RootState) => state.projects.error;

export const selectProjectCardsData = (state: RootState) =>
  state.projects.cardsData;

export const selectProjectsList = (state: RootState) =>
  state.projects.projectsList;
