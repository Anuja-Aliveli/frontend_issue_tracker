import { ProjectDetails } from '../Interfaces/projectInterface';
import { tokenApi } from './axios';

// Create Project
export const onCreateProject = async (data: ProjectDetails) => {
  try {
    const response = await tokenApi.post('/create_project/', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Project Cards
export const projectCards = async () => {
  try {
    const response = await tokenApi.get('projects_cards/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Project List
export const projectList = async (
  search_input = '',
  page: number = 1,
  limit: number = 10,
  sort: string = '',
) => {
  try {
    const response = await tokenApi.get('projects/', {
      params: { search_input, page, limit, sort },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get Project details
export const projectDetails = async (project_id: string) => {
  try {
    const response = await tokenApi.get('get_project/', {
      params: { project_id },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Edit Project
export const onEditProject = async (data: ProjectDetails) => {
  try {
    const response = await tokenApi.put('/update_project/', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
