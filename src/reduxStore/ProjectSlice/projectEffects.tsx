import { NavigateFunction, useNavigate } from 'react-router-dom';
import {
  initialProjectDetails,
  ProjectDetails,
} from '../../Interfaces/projectInterface';
import {
  onCreateProject,
  onEditProject,
  projectCards,
  projectDetails,
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
  getProjectDetails,
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
export const getProjectsList = async (
  dispatch: any,
  search: string = '',
  page: number = 1,
  limit: number = 10,
  sortField: string = 'created_at',
  sortDirection: string = 'desc',
) => {
  // dispatch(projectsList());
  try {
    const sort = `${sortField} ${sortDirection}`;
    const data = await projectList(search, page, limit, sort);
    dispatch(projectsListSuccess({ projectsList: data.data }));
  } catch (error: any) {
    dispatch(projectsListFailure(error.response.data.error || ERROR_OCCURED));
  }
};

// Get Project Cards
export const fetchProjectDetails = async (dispatch: any, projectId: string) => {
  try {
    const data = await projectDetails(projectId);
    dispatch(getProjectDetails({ projectDetails: data.data }));
  } catch (error: any) {
    dispatch(
      projectCardsDataFailure(error.response.data.error || ERROR_OCCURED),
    );
  }
};

// Edit Project API
export const editProjectAPI = async (
  projectDetails: ProjectDetails,
  dispatch: any,
  navigate: NavigateFunction,
  isNavigate: boolean = true,
) => {
  dispatch(createProject());

  try {
    const data = await onEditProject(projectDetails);
    dispatch(createProjectSuccess({ projectDetails: initialProjectDetails }));
    toast.success(data.message);
    if (isNavigate) {
      navigate('/projects');
    }
  } catch (error: any) {
    dispatch(createProjectFailure(error.response.data.error || ERROR_OCCURED));
  }
};
