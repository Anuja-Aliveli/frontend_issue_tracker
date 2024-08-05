import { NavigateFunction, useNavigate } from 'react-router-dom';
import {
  initialProjectDetails,
  ProjectDetails,
} from '../../Interfaces/projectInterface';
import { onCreateProject } from '../../services/projectService';
import { ERROR_OCCURED } from '../../utils/constants';
import { toast } from '../../utils/ToastMessage';
import {
  createProjectSuccess,
  createProjectFailure,
  createProject,
} from './projectActions';

export const createProjectAPI = async (
  projectDetails: ProjectDetails,
  dispatch: any,
  navigate: NavigateFunction,
) => {
  dispatch(createProject());

  try {
    const data = await onCreateProject(projectDetails);
    dispatch(createProjectSuccess({ projectDetails: initialProjectDetails }));
    toast.success(data.message);
    navigate('/projects');
  } catch (error: any) {
    dispatch(createProjectFailure(error.response.data.error || ERROR_OCCURED));
  }
};
