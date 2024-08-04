import { ProjectDetails } from '../Interfaces/projectInterface';
import { tokenApi } from './axios';

export const onCreateProject = async (data: ProjectDetails) => {
  try {
    const response = await tokenApi.post('/create_project/', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
