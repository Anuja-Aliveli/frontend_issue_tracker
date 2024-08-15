import { NavigateFunction, useNavigate } from 'react-router-dom';
import {
  initialProjectDetails,
  ProjectDetails,
} from '../../Interfaces/projectInterface';
import { onCreateProject, projectCards } from '../../services/projectService';
import { ERROR_OCCURED } from '../../utils/constants';
import { toast } from '../../utils/ToastMessage';
import {
  createProjectSuccess,
  createProjectFailure,
  createProject,
  projectCardsDataSuccess,
  projectCardsDataFailure,
  projectCardsData,
} from './projectActions';

// Create Project API
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

export const getProjectCards = async (dispatch: any) => {
  dispatch(projectCardsData());

  try {
    const data = await projectCards();
    dispatch(projectCardsDataSuccess({ cardsData: data.data }));
  } catch (error: any) {
    dispatch(
      projectCardsDataFailure(error.response.data.error || ERROR_OCCURED),
    );
  }
};
