import { createReducer } from '@reduxjs/toolkit';
import { ProjectSliceInterface } from '../../Interfaces/projectInterface';
import {
  createProject,
  createProjectFailure,
  createProjectSuccess,
  projectCardsData,
  projectCardsDataFailure,
  projectCardsDataSuccess,
} from './projectActions';

const initialState: ProjectSliceInterface = {
  projectDetails: {
    owner: '',
    project_name: '',
    project_description: '',
    project_status: '',
    project_type: '',
    start_date: null,
    end_date: null,
  },
  cardsData: {
    planning: 0,
    in_progress: 0,
    completed: 0,
    closed: 0,
    personal: 0,
    organization: 0,
  },
  isLoading: false,
  error: null,
};

const projectSliceReducer = createReducer(initialState, (builder) => {
  builder
    // create Project
    .addCase(createProject, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(createProjectSuccess, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.projectDetails = action.payload.projectDetails;
    })
    .addCase(createProjectFailure, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    // project cards
    .addCase(projectCardsData, (state, action) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(projectCardsDataSuccess, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.cardsData = action.payload.cardsData;
    })
    .addCase(projectCardsDataFailure, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
});

export default projectSliceReducer;
