import { combineReducers } from '@reduxjs/toolkit';
import projectSliceReducer from './reduxStore/ProjectSlice/projectReducers';

const rootReducer = combineReducers({
  projects: projectSliceReducer,
});

export default rootReducer;
