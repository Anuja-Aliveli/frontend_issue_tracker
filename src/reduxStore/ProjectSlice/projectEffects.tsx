import { ProjectDetails } from '../../Interfaces/projectInterface';
import { onCreateProject } from '../../services/projectService';
import { ERROR_OCCURED } from '../../utils/constants';
import {
  createProjectSuccess,
  createProjectFailure,
  createProject,
} from './projectActions';

export const createProjectAPI = async (
  projectDetails: ProjectDetails,
  dispatch: any,
) => {
  dispatch(createProject());

  try {
    const data = await onCreateProject(projectDetails);
    dispatch(createProjectSuccess({ projectDetails: data }));
  } catch (error: any) {
    console.log('ddddddddddddd', error);
    dispatch(createProjectFailure(error.response.data.error || ERROR_OCCURED));
  }
};
