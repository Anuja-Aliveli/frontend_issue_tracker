import { NavigateFunction, useNavigate } from 'react-router-dom';
import {
  initialProjectDetails,
  ProjectDetails,
} from '../../Interfaces/projectInterface';
import {
  onCreateProject,
  projectCards,
  projectList,
} from '../../services/projectService';
import { ERROR_OCCURED } from '../../utils/constants';
import { toast } from '../../utils/ToastMessage';
import {
  createProjectSuccess,
  createProjectFailure,
  createProject,
  projectCardsDataSuccess,
  projectCardsDataFailure,
  projectCardsData,
  projectsList,
  projectsListSuccess,
  projectsListFailure,
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

// Get Project Cards
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

// Get Projects List
export const getProjectsList = async (dispatch: any) => {
  dispatch(projectsList());
  try {
    const data = await projectList();
    dispatch(projectsListSuccess({ projectsList: data.data }));
  } catch (error: any) {
    dispatch(projectsListFailure(error.response.data.error || ERROR_OCCURED));
  }
};
