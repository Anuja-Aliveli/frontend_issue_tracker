import { createReducer } from '@reduxjs/toolkit';
import { ProjectSliceInterface } from '../../Interfaces/projectInterface';
import {
  createProject,
  createProjectFailure,
  createProjectSuccess,
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
  isLoading: false,
  error: null,
};

const projectSliceReducer = createReducer(initialState, (builder) => {
  builder
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
    });
});

export default projectSliceReducer;
