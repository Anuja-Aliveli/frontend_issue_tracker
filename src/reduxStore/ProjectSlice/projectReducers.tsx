import { createReducer } from '@reduxjs/toolkit';
import { ProjectSliceInterface } from '../../Interfaces/projectInterface';
import { onCreateProject } from './projectActions';

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
};

const projectSliceReducer = createReducer(initialState, (builder) => {
  builder.addCase(onCreateProject, (state, action) => {
    state.projectDetails = action.payload.projectDetails;
  });
});

export default projectSliceReducer;
