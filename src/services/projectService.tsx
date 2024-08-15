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
